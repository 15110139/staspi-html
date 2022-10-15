let c = 0;
let s = 0;
function onclickDropdownInfo(){
  if(c % 2 == 0) {
document.querySelector('.cont_dropdown_info').className = "cont_dropdown_info active-ft";    
document.querySelector('.cont_icon_info').className = "cont_icon_info ti-angle-down";    
c++; 
  }else{
document.querySelector('.cont_dropdown_info').className = "cont_dropdown_info disable";        
document.querySelector('.cont_icon_info').className = "cont_icon_info ti-angle-left";        
c++;
  }
}

function onclickDropdownService(){
  if(s % 2 == 0) {
document.querySelector('.cont_dropdown_service').className = "cont_dropdown_service active-ft";    
document.querySelector('.cont_icon_service').className = "cont_icon_service ti-angle-down";    
s++; 
  }else{
document.querySelector('.cont_dropdown_service').className = "cont_dropdown_service disable";        
document.querySelector('.cont_icon_service').className = "cont_icon_service ti-angle-left";        
s++;
  }
}

function onclickDropdownSocial(){
  if(s % 2 == 0) {
document.querySelector('.cont_dropdown_social').className = "cont_dropdown_social active-ft";    
document.querySelector('.cont_icon_social').className = "cont_icon_social ti-angle-down";    
s++; 
  }else{
document.querySelector('.cont_dropdown_social').className = "cont_dropdown_social disable";        
document.querySelector('.cont_icon_social').className = "cont_icon_social ti-angle-left";        
s++;
  }
}