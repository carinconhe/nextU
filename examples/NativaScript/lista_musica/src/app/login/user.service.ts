import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private userNameList = new Array<User>({
        username:"carincon",password: "123"
    })

    validateLogin(user: User): Boolean{
        if(this.userNameList.filter(item => item.username===user.username &&
                                            item.password===user.password).length>0){
                                                return true;
                                            }else
                                                return false;
    }
}