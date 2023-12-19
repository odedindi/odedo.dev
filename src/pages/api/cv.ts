import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const pdfPath = path.join(process.cwd(), 'public/assets/cv_oded_winberger.pdf');
    const file = fs.createReadStream(pdfPath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=cv_oded_winberger.pdf');

    file.pipe(res);
}