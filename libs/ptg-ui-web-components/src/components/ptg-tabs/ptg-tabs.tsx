import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptg-tabs',
  styleUrl: 'ptg-tabs.scss',
  shadow: true,
})

export class PtgTabs {
    @Prop() backgroundColor : string = 'white';
    @Prop() showScroll : boolean = false;
    @Prop() tabLabelArray : { label: string, content: any, checked : boolean }[] = 
    [
    { 
        "label" : "One",
        "content" : "In publishing and graphic design, Lorem ipsum is a placeholder. In publishing and graphic design",
        "checked" : true
    }, 
    {
        "label" : "Two",
        "content" : "In publishing and graphic design, Lorem ipsum is a placeholder. In publishing",
        "checked" : false
    },
    {
        "label" : "Three",
        "content" : <div><input></input><br/><input></input></div>,
        "checked" : false
    },
    {
        "label" : "Four",
        "content" : <div><form method="get"><label htmlFor="fname">First name:</label><input type="text" id="fname" name="fname"/><br/><label htmlFor="lname">Last name:</label><input type="text" id="lname" name="lname"/><br/><input type="submit" value="Submit"/> </form></div>,
        "checked" : false
    },
    { 
        "label" : "One",
        "content" : "In publishing and graphic design, Lorem ipsum is a placeholder. In publishing and graphic design",
        "checked" : true
    }, 
    {
        "label" : "Two",
        "content" : "In publishing and graphic design, Lorem ipsum is a placeholder. In publishing",
        "checked" : false
    },
    {
        "label" : "Three",
        "content" : <div><input></input><br/><input></input></div>,
        "checked" : false
    },
    {
        "label" : "Four",
        "content" : <div><form method="get"><label htmlFor="fname">First name:</label><input type="text" id="fname" name="fname"/><br/><label htmlFor="lname">Last name:</label><input type="text" id="lname" name="lname"/><br/><input type="submit" value="Submit"/> </form></div>,
        "checked" : false
    },
  ]


    private tabSection : HTMLDivElement;
  
    dragging(){
       const leftDrag = this.tabSection
        if(leftDrag){
            leftDrag.scrollLeft += 800;
        }
    }

    draggingLeft(){
        const rightDrag = this.tabSection
        if(rightDrag){
            rightDrag.scrollLeft -= 800;
        }
    }
    
    render() {
  

    return(
        <div class="tabs"  style={{backgroundColor : `${this.backgroundColor}`}}>
            <div class="label-div" ref={(el)=>(this.tabSection = el)}>

            {this.showScroll == true ? (
                <div>
               <div onClick={() => this.draggingLeft()}>
               <p><i class="arrow left"></i></p>
               </div>
               <div onClick={() => this.dragging()}>
               <p><i class="arrow right"></i></p>
               </div>
               </div>
            ) : (
                null
            )}
            
        {this.tabLabelArray.map((item) => {
            return(
            
            <div class="tabs-section">
                <input type="radio" class="tabs__radio" name="tabs-example" id={item.label}  checked={item.checked}/>
                <label  htmlFor={item.label}  class="tabs__label">{item.label}</label>

                <div class="tabs__content tabs-list" >
                    {item.content}
                </div>
            </div>
            )
        })}

        </div>

                

{/* 
        {this.tabCount >= 8  && ( */}
            {/* <div>
            <div class="right-shift" onClick={() => this.dragging()}>
            <p><i class="arrow left"></i></p>
            </div>

            <div  class="left-shift" onClick={() => this.draggingLeft()}>
            <p><i class="arrow right"></i></p>
            </div>
            </div> */}
        
        {/* )} */}
      
        {/* {this.tabLabelArray.map((list) => {
            return(
                <div class="tabs__content tabs-list"  ref={(el)=>(this.tabContent = el)} >
                    {list.content}
                </div>
            )
        })} */}





 
     
        </div>
    );
  }
}



















