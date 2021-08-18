export const whatsAppShare=(title,url)=>{

    const message=`*${title}*\n${url}`
    return `https://api.whatsapp.com/send?text=${encodeURI(message)}`

};