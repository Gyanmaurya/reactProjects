import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.AppwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                console.log('Account created successfully:', userAccount);
                return await this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createSession(email, password);
            console.log('Login successful:', session);
            return session;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async getUser() {
        try {
            const session = await this.checkSession();
            if (session) {
                const user = await this.account.get();
                console.log('User details:', user);
                return user;
            } else {
                console.log('No valid session found. User is not authenticated.');
                throw new Error('User not authenticated');
            }
        } catch (error) {
            console.error('Error getting user details:', error);
            throw error;
        }
    }

    async logout() {
        try {
            const result = await this.account.deleteSession('current');
            console.log('Logout successful:', result);
            return result;
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }

    async checkSession() {
        try {
            const session = await this.account.getSession('current');
            console.log('Session details:', session);
            return session;
        } catch (error) {
            console.error('Session error:', error);
            return null;
        }
    }
}

const authService = new AuthService();
export default authService;

// Ensure session validity before performing user-related actions
(async () => {
    try {
        const session = await authService.checkSession();
        if (session) {
            const user = await authService.getUser();
            console.log('User details:', user);
        } else {
            console.log('No valid session found. Redirecting to login...');
        }
    } catch (error) {
        console.error('Error during session check or user retrieval:', error);
    }
})();
