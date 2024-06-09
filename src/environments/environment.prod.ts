export const environment = {
    production:false,
    criptoKey:'ntt-data',
    baseUrl:'http://localhost:8090',
    endpoints:{
        user:(type:string,document:string)=>`user?type=${type}&document=${document}`
    }
}