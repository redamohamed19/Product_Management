export interface istatus{
 
    FirstName: String,
    SecondName: String,
    Email: String,
     PhoneNumber:String,
     Password: String,
  
}
export interface IuserInfo {
Status:istatus,
Setstatus:(value: istatus) => void; 
}

export interface IPasswordEntry {
    GoNext: boolean;
    SetGoNext:any
  
  }