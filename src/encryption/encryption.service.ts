import { Injectable } from '@nestjs/common';
const crypto = require('crypto')
@Injectable()
export class EncryptionService{

    private loadEncryptionKey(){
        const algorithm = 'aes-256-cbc' 
        const password = 'abcdefg'
        const salt = '12345678'
        const key = crypto.scryptSync(password, salt, 32)
        const iv = crypto.randomBytes(16)
          
        const cipher = crypto.createCipheriv(algorithm, key, iv)      
        const decipher = crypto.createDecipheriv(algorithm, key, iv)  



   
    
        return {cipher,decipher}
      }
      encryptData(data: string): string {
        const cipher = this.loadEncryptionKey().cipher;
        const inputEncoding = 'utf8'
        const outputEncoding = 'hex' 
        let cipheredData = cipher.update(data, inputEncoding, outputEncoding)
        cipheredData += cipher.final(outputEncoding)
        return cipheredData;
      }
      decryptData(data:string): string {
        const decipher = this.loadEncryptionKey().decipher;
        const inputEncoding = 'utf8'
        const outputEncoding = 'hex' 
        let decipheredData = decipher.update(data, outputEncoding, inputEncoding)
        decipheredData += decipher.final(inputEncoding)
        return decipheredData;
      }
}