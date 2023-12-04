import { Tabs, Tab } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


export interface ShowCodeComponentProps {
    componentCode : string,
    htmlCode : string,
    cssCode? : string,
    isCssCode : boolean
}

export function ShowCodeComponent(props: ShowCodeComponentProps) {
  return (
    <section>
      <div className="container-fluid">
        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
          <Tabs defaultActiveKey="example1" className="draganddropmain w-100">
         
          <Tab eventKey="example1" title="TypeScript">
            <div className='row'>
            <div className="col-lg-11">
              <SyntaxHighlighter language="javascript" className="syntax-highlighter">
                {props.componentCode}
              </SyntaxHighlighter>
            </div>
            <div className="col-lg-1 mt-5">
              <CopyToClipboard text={props.componentCode} className="copy-to-clipboard">
                <ContentCopyIcon fontSize="small"/>
              </CopyToClipboard>
            </div>
            </div>
          </Tab>
          
          <Tab eventKey="example2" title="HTML">
            <div className='row'>
            <div className="col-lg-11">
              <SyntaxHighlighter language="javascript" className="syntax-highlighter">
                {props.htmlCode}
              </SyntaxHighlighter>
            </div>
            <div className="col-lg-1 mt-5">
              <CopyToClipboard text={props.htmlCode} className="copy-to-clipboard">
              <ContentCopyIcon fontSize="small"/>
              </CopyToClipboard>
            </div>
            </div>
          </Tab>

          {props.isCssCode && 
            <Tab eventKey="example3" title="CSS">
            <div className='row'>
            <div className="col-lg-11">
              <SyntaxHighlighter language="javascript" className="syntax-highlighter">
                {props.cssCode}
              </SyntaxHighlighter>
            </div>
            <div className="col-lg-1 mt-5">
              <CopyToClipboard text={props.cssCode} className="copy-to-clipboard">
              <ContentCopyIcon fontSize="small"/>
              </CopyToClipboard>
            </div>
            </div>
            </Tab>
          }
      
        
        </Tabs>
        </div>
      </div>
    </section>
  );
}

export default ShowCodeComponent;
