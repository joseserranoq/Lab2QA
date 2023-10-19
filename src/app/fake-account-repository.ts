import { Account } from "./account";
import { AccountRepository } from "./account-repository";
import { Rol } from "./rol";

export class FakeAccountRepository implements AccountRepository {
    account: Account[] = [];
    getLista(): Account[] {
        return this.account;
    }
    save(cuenta: Account): void {
        this.account = [...this.account, cuenta];
    }
    getListaConnects(): Account[] {
        throw new Error("Method not implemented.");
    }
    setListaConnects(cuenta: Account): void {
        return;
    }
    findAccount(email: string): Account {
        //se realiza de una manera que m[as cercana a produccion
        //let account = this.account.find((account) => account.getEmail() === email);
        for(let i = 0; i < this.account.length; i++ ){
            console.log(this.account[i]);
            if(this.account[i].getEmail() === email){
               
                return this.account[i];
            }
        }
        //si no encuentra el email retorna un error
        throw new Error('There is no account with that email');
    }
        
    findRol(cuenta: Account): Rol {
        throw new Error("Method not implemented.");
    }
    isBloqueado(cuenta: Account): boolean {
        return false;
    }
    remove(cuenta: Account): void {
        throw new Error("Method not implemented.");
    }
}

