import React from 'react';
import PageHeader from '@/components/PageHeader/PageHeader';
import IntelligenceViewer from "@/components/PDF/PDFViewer";

import file from "@/assets/files/idea-presentation-5.pdf";

function PDFViewer (props) {
    return (
        <>
            <PageHeader title="문서 뷰어" desc="문서 뷰어" />
            <IntelligenceViewer file={file} />
        </>
    );
}

export default PDFViewer;