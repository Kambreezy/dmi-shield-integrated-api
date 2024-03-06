import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';

import { DocEbsInput } from '../models/DocumentEBS';
import { Task, TaskPage, formatTask } from '../../utils/helpers/ebs';
import DocumentService from '../services/DocumentService';

class EbsController {
    async getEbsData(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const ebsResponse = await fetch(
                'https://api.m-dharura.health.go.ke/v1/shield/data'
            );

            const headerDate =
                ebsResponse.headers && ebsResponse.headers.get('date')
                    ? ebsResponse.headers.get('date')
                    : 'no response date';

            console.log('EBS Response Status Code:', res.statusCode);
            console.log('Date in Response header:', headerDate);

            const data = await ebsResponse.json();

            const taskPage = data['taskPage'] as TaskPage;
            const page = taskPage.page;
            const pages = taskPage.pages;

            if (taskPage.docs.length > 0) {
                for (let index = 0; index < taskPage.docs.length; index++) {
                    const doc = taskPage.docs[index];
                    const ebsDoc = formatTask(doc);

                    try {
                        const data = await DocumentService.createEbsDocument(
                            ebsDoc
                        );
                        console.log(data);
                    } catch (error) {
                        console.log(error);
                    }
                }
            }

            res.status(200).send({
                message: 'Fetched EBS Data succesfully',
                data: {
                    processed_docs: taskPage.docs.length
                },
                success: true
            });
        } catch (error) {
            console.log('error');
            console.log(error);
            next(error);
        }
    }
}

export default new EbsController();
