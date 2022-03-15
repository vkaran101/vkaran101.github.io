import React from "react";
import { Document, Page, pdfjs} from 'react-pdf';
import vandana_resume from './vandana-karan-resume-UX.pdf';
import './Resume.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    return ( 
        <div>
            <div className="page__header">
                <p>Resume</p>
                <Link to="/vandana-karan-resume-UX.pdf" target="_blank" download>
                    <FontAwesomeIcon icon={faDownload} size="fa-lg" color="white"/>
                </Link>
            </div>
            <Document file={vandana_resume} onLoadError={console.error}>
                <Page pageNumber={1}></Page>
            </Document>
        </div>
    );
  }
  
export default Resume;


