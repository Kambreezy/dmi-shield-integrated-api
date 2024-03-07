import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import { TaskPage, formatTask } from '../../utils/helpers/ebs';
import DocumentService from '../services/DocumentService';

class EbsController {
    async getMdharuraData(
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
            let successCount = 0;
            let errorCount = 0;

            if (taskPage.docs.length > 0) {
                for (const doc of taskPage.docs) {
                    const ebsDoc = formatTask(doc);

                    try {
                        await DocumentService.createMdharuraDocument(ebsDoc);
                        successCount += 1;
                    } catch (error) {
                        errorCount += 1;
                        console.log(error);
                    }
                }
            }

            res.status(200).send({
                message: 'Fetched EBS Data succesfully',
                data: {
                    docs: {
                        total: taskPage.docs.length,
                        success: successCount,
                        error: errorCount
                    }
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
