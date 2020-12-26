import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import Viewer from '@phuocng/react-pdf-viewer';

import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css'; 

const ViewerPdf = ({url}) => {
    return (
        <div style={{ height: '600px' }}>
            <Viewer fileUrl={{url }} />
        </div>
    )
}
 
export default ViewerPdf