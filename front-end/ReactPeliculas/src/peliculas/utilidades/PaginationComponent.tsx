import { useEffect, useState } from "react";

export default function PaginationComponent(props: paginationProps) {

    const [linksList, setLinksList] = useState<modelLink[]>([]);

    useEffect(() => {
        const enablePreviousPage = props.actualPage !== 1;
        const previousPage = props.actualPage - 1;
        const links: modelLink[] = [];

        links.push({
            text: "Anterior",
            enabled: enablePreviousPage,
            page: previousPage,
            active: false
        });

        for (let i = 1; i <= props.pageAmountTotal; i++) {
            if (i >= props.actualPage - props.ratio && i <= props.actualPage + props.ratio) {
                links.push({
                    text: `${i}`,
                    active: props.actualPage === i,
                    enabled: true, page: i
                })
            }
        }

        const enableNextPage = props.actualPage !== props.pageAmountTotal && props.pageAmountTotal > 0;
        const nextPage = props.actualPage + 1;

        links.push({
            text: "Siguiente",
            page: nextPage,
            enabled: enableNextPage,
            active: false
        });
        setLinksList(links);
    },[props.actualPage, props.pageAmountTotal, props.ratio])

    function getClass(link: modelLink){
         if (link.active){
            return "active pointer";
        } 
        if(!link.enabled) {
            return "disabled";
        }  
        return "pointer";
    }

    function selectPage(link: modelLink){
         if(link.page === props.actualPage){
            return;
        } 
        if(!link.enabled){
            return;
        }  
        props.onChange(link.page);
      
    }
    return(
        <>
        <nav>
            <ul className = "pagination justify-content-center">
                {linksList.map(link => <li key = {link.text}
                onClick = {() => selectPage(link)}
                className = {`page-item cursor ${getClass(link)}`}
                >
                 <span className = "page-link">{link.text}</span>
                </li>)}
            </ul>
        </nav>
        </>
    )
}

interface modelLink {
    page: number;
    enabled: boolean;
    text: string;
    active: boolean;
}

interface paginationProps {
    actualPage: number;
    pageAmountTotal: number;
    ratio: number;
    onChange(page: number): void
}

PaginationComponent.defaultProps = {
    ratio: 3
}