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
  @Prop() setPage: any;
  @Prop() height: string;
  @Prop() hasData: boolean;

  private innerDiv : HTMLDivElement;



  handleScroll(){
    const innerDivData = this.innerDiv;
    if(innerDivData.scrollTop + innerDivData.clientHeight >= innerDivData.scrollHeight -1 && !this.isLoading && this.hasData)
    {
      this.setPage(prevPage => prevPage + 1);
      this.loadData();
     
    }
   
  }
  
  async loadData(){
    if(this.fetchData){
      try{
        this.isLoading =true;
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
    this.innerDiv.addEventListener('scroll', this.handleScroll.bind(this));
  }

  removeScrollListener(){
    this.innerDiv.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  render(){
    return(
      <div ref={(el)=>(this.innerDiv =el)} class="infiniteDiv" style={{height: this.height || "150px"}}>
          {
            this.isLoading?  <p>Loading...</p> :
            this.hasData && this.fetchData && this.setPage && <slot />
          }
        </div>
    );
        }
}
