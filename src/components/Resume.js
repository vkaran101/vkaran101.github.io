import React from "react";
import { Document, Page, pdfjs} from 'react-pdf';
import vandana_resume from './vandana-karan-resume-UX.pdf';
import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    return ( 
        <div>
            <h1>Resume</h1>
            <Document file={vandana_resume} onLoadError={console.error}>
                <Page pageNumber={1}></Page>
            </Document>
        </div>
    );
  }
  
export default Resume;


