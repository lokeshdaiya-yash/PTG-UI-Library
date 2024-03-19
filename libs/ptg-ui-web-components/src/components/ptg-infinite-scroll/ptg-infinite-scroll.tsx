import { Component, h, State, Prop } from '@stencil/core';

@Component({
    tag: 'ptg-infinite-scroll',
    styleUrl: 'ptg-infinite-scroll.scss',
    shadow: true
})

export class PtgInfiniteScroll{
  @Prop() items: any[] =[];
  @State() isLoading: boolean=false;
  @Prop() fetchData : Function;
  @State() page: number =1;
  @Prop() height: string;
  @Prop() hasData: boolean;
  @State() showSpinner: boolean;
  
  private innerDiv : HTMLDivElement;



  handleScroll =() =>{
    const innerDivData = this.innerDiv;
    if(innerDivData.scrollTop + innerDivData.clientHeight >= innerDivData.scrollHeight -1 && !this.isLoading && this.hasData)
    {
      // this.setPage(prevPage => prevPage + 1);
      this.loadData();
     
    }
   
  }
  
  async loadData(){
    if(this.fetchData){
      this.isLoading =true;
     
      try{

      await this.fetchData();
       
      }
      catch(error){
        console.log(error)
      }
      finally{
        this.isLoading = false;
      }
    }
  }

  componentDidLoad(){
    this.addScrollListener();
  
  }

  connectedCallback(){
    this.addScrollListener();
  }

  disconnectedCallback(){
    this.removeScrollListener();
  }

  addScrollListener(){
    this.innerDiv?.addEventListener('scroll', this.handleScroll);
  }

  removeScrollListener(){
    this.innerDiv?.removeEventListener('scroll', this.handleScroll);
  }

  render(){
   
    return(
      <div ref={(el)=>(this.innerDiv =el)} class="infiniteDiv" style={{height: this.height || "150px"}}>
          {
             this.isLoading?  <ptg-spinner appearance="primary" class="spinnerDiv"></ptg-spinner> :
             <slot />
          }
        </div>
    );
        }
}