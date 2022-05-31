import React from "react";
import { Document, Page, pdfjs} from 'react-pdf';
import vandana_resume from './vandana-karan-resume-2022.pdf';
import './Resume.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { useWindowWidth } from '@wojtekmaj/react-hooks';


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {

    const width = useWindowWidth();
    return ( 
        <div>
            <div className="page__header">
                <p>Resume</p>
                <Link to="/vandana-karan-resume-2022.pdf" target="_blank" download>
                    <FontAwesomeIcon icon={faDownload} size="xl" color="white" data-tip data-for="DownloadTip"/>
                </Link>
                <ReactTooltip id="DownloadTip">
                    <span>Download</span>
                </ReactTooltip>
            </div>
            <div className="document__container" data-tip data-for="resumeTip">
                <Document file={vandana_resume} onLoadError={console.error}>
                    <Page pageNumber={1}
                    width={Math.min(width * 0.75, 650)} // width: 90vw; max-width: 400px
                    ></Page>
                </Document>
            </div>
        </div>
    );
  }
  
export default Resume;


