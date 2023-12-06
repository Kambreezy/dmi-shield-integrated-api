import { NextFunction, Request, Response } from 'express';
import { DocumentSariType, DocumentType } from '../types/document';
import DocumentService from '../services/DocumentService';
import multer from 'multer';
import * as streamifier from 'streamifier';
import csv from 'csv-parser';

class UploadFileController {
    // ... Other members

    async createDocument(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const storage = multer.memoryStorage();
            const upload = multer({ storage: storage }).single('csvFile');

            const fileResult: any[] = [];
            let headers: any = [];
            let isEmptyFile = true;

            let dateUploaded: string = '';
            let uploadDocType: string = '';
            let userId: number;
            const self = this;
            await new Promise<void>((resolve, reject) => {
                upload(req, res, (err) => {
                    if (err) {
                        reject(new Error('Error uploading CSV file'));
                        return;
                    }

                    if (!req.file) {
                        reject(new Error('CSV file is missing'));
                        return;
                    }

                    dateUploaded = req.query.dateUploaded?.toString() || '';
                    uploadDocType = req.query.uploadDocType?.toString() || '';
                    userId = parseInt(req.query.userId.toString(), 10);

                    const csvFile = req.file;
                    const stream = streamifier.createReadStream(csvFile.buffer);

                    // Use csv-parser to parse the CSV file
                    stream
                        // .pipe(csv({ headers: true, skipLines: 1 })) // Use headers: true to treat the first row as headers
                        // .pipe(csv({ headers: true })) // Use headers: true to treat the first row as headers
                        .pipe(csv()) // Use headers: true to treat the first row as headers

                        .on('data', (data) => {
                            // if (
                            //     Object.values(data).some(
                            //         (value) =>
                            //             value !== '' &&
                            //             value !== null &&
                            //             value !== undefined
                            //     )
                            // ) {
                            //     fileResult.push(data);
                            // }

                            const isNonEmptyRow = Object.values(data).some(
                                (value) =>
                                    value !== '' &&
                                    value !== null &&
                                    value !== undefined
                            );

                            if (isNonEmptyRow) {
                                fileResult.push(data);
                            }
                        })
                        .on('end', () => {
                            resolve();
                        })
                        .on('error', (csvError) => {
                            reject(
                                new Error(
                                    `Error parsing CSV: ${csvError.message}`
                                )
                            );
                        });
                });
            });

            console.log('File length', fileResult.length);

            for (let i = 0; i < fileResult.length; i++) {
                if (i === 0) {
                    headers = fileResult[0];
                }

                const doc503_payload: DocumentType = {
                    'AGE if 12 months 0': headers['AGE (if <12 months, 0)'],
                    'ATTENDED HEALTH FACILITY YN':
                        headers['ATTENDED HEALTH FACILITY YN'],
                    'COUNTRY OF RESIDENCE': headers['COUNTRY OF RESIDENCE'],
                    'COUNTY OF RESIDENCE WITHIN KENYA':
                        headers['COUNTY OF RESIDENCE WITHIN KENYA'],
                    'CULTURE RESULT': headers['CULTURE RESULT'],
                    'Comments please provide any other relevant details about the case eg travel history venue symptoms etc':
                        headers[
                            'Comments (please provide any other relevant details about the case e.g., travel history, venue, symptoms etc)'
                        ],
                    'DATE ATTENDED HEALTH FACILITY ddmmyyyy':
                        headers['DATE ATTENDED HEALTH FACILITY (dd/mm/yyyy)'],
                    'DATE OF DEATH ddmmyyyy':
                        headers['DATE OF DEATH (dd/mm/yyyy)'],
                    'DATE OF DISCHARGE ddmmyyyy':
                        headers['DATE OF DISCHARGE  (dd/mm/yyyy)'],
                    'DATE OF SYMPTOM ONSET ddmmyyyy':
                        headers['DATE OF SYMPTOM ONSET  (dd/mm/yyyy)'],
                    'DEHYDRATION AT ARRIVAL': headers['DEHYDRATION AT ARRIVAL'],
                    'HEALTH FACILITY NAME lower case only':
                        headers['HEALTH FACILITY NAME (lower case only)'],
                    'LAB CONFIRMATION DATE ddmmyyyy':
                        headers['LAB CONFIRMATION DATE  (dd/mm/yyyy)'],
                    'LAB NAME': headers['LAB NAME'],
                    'LAB SITE': headers['LAB SITE'],
                    'OUTIN PATIENT STATUS': headers['OUT/IN PATIENT STATUS'],
                    'PLACE OF DEATH': headers['PLACE OF DEATH'],
                    'PREVIOUS HISTORY Epi linked to a confirmed case':
                        headers[
                            'PREVIOUS HISTORY (Epi linked to a confirmed case)'
                        ],
                    'RDT RESULT': headers['RDT RESULT'],
                    'REPORTING COUNTY': headers['REPORTING COUNTY'],
                    'REPORTING SUB COUNTY': headers['REPORTING SUB COUNTY'],
                    'REPORTING VILLAGE TOWNCAMP':
                        headers['REPORTING VILLAGE/TOWN/CAMP'],
                    'REPORTING WARD': headers['REPORTING WARD'],
                    'VACCINE DOSES': headers['VACCINE DOSES'],
                    AgeGroup: headers['AgeGroup'],
                    CONTACT: headers['CONTACT'],
                    Index: headers['#'],
                    NAME: headers['NAME'],
                    OUTCOME: headers['OUTCOME'],
                    SEROTYPE: headers['SEROTYPE'],
                    SEX: headers['SEX'],
                    TIMESTAMP: headers['TIMESTAMP'],
                    VACCINATED: headers['VACCINATED'],
                    userId: userId
                };

                const docSariPayload: DocumentSariType = {
                    userId: userId,
                    PatientID: headers['PatientID'],
                    Datescreened: headers['Datescreened'],
                    EnrolmentDate: headers['EnrolmentDate'],
                    Eligible: headers['Eligible'],
                    Enrolled: headers['Enrolled'],
                    F_NAME: headers['F_NAME'],
                    Age: headers['Age'],
                    Sex: headers['Sex'],
                    Dateonset: headers['Dateonset'],
                    casedef: headers['casedef'],
                    chronic: headers['chronic'],
                    flutest: headers['flutest'],
                    covidtest: headers['covidtest'],
                    Dateassesment: headers['Dateassesment'],
                    outcome: headers['outcome'],
                    colldate: headers['colldate'],
                    samplecollected: headers['samplecollected'],
                    sampletested: headers['sampletested'],
                    datetested: headers['datetested'],
                    flupos: headers['flupos'],
                    fluapos: headers['fluapos'],
                    h3n2: headers['h3n2'],
                    ph1n1: headers['ph1n1'],
                    unsub_non: headers['unsub_non'],
                    notsubtyp: headers['notsubtyp'],
                    flubpos: headers['flubpos'],
                    yamagata: headers['yamagata'],
                    victoria: headers['victoria'],
                    flub_undetermined: headers['flub_undetermined'],
                    covidpos: headers['covidpos'],
                    county: headers['county'],
                    Facility_site: headers['Facility_site'],
                    Longitude: headers['Longitude'],
                    Latitude: headers['Latitude']
                };

                // console.log('503Payload', doc503_payload);
                // console.log('SariPayload', doc503_payload);

                if (uploadDocType === 'moh_503') {
                    await DocumentService.createDocument(doc503_payload);
                } else if (uploadDocType === 'sari_ili') {
                    await DocumentService.createSariDocument(docSariPayload);
                }
            }

            res.status(200).send({
                message: 'Document submitted successfully',
                data: null,
                success: true
            });
        } catch (error) {
            console.log('error');
            console.log(error);
            next(error);
        }
    }
}

export default new UploadFileController();
