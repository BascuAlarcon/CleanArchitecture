import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../models/user.schema";

const MOCK_USER = {
    name: 'Leifer',
    description: 'hello',
    uuid: '000-000'
};

export class MockRepository implements UserRepository{
    async findUserById(uuid: string): Promise<any> {
        const user = MOCK_USER;
        return user
    }
    async registerUser(userIn: UserEntity): Promise<any> {
        const user = MOCK_USER;
        return user    
    }

    async listUser(): Promise<any> {
        const user = [MOCK_USER, MOCK_USER, MOCK_USER]
        return user    
    }
     
}