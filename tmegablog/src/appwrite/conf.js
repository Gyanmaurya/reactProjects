
import { Client, Databases, ID, Storage,Query} from "appwrite";
import config from "../config/config";


export class Service {

    client = new Client();
    databases;
    storage;

    constructor(){
         this.client.setEndpoint(config.AppwriteUrl)
         .setProject(config.appwriteProjectId); 
         this.databases = new Databases(this.client)
         this.storage = new Storage(this.client)
    }

    async createPost({title, slug, status, content, featuredImage, userId}){
        
      return  await  this.databases.createDocument(config.appwriteDatabaseId,config.appwriteCollectionId, ID.unique(),{title, slug, status, content, featuredImage, userId})
         
    }

    async updatePost ({title, slug, status, content, featuredImage, userId}){
     return await  this.databases.updateDocument(config.appwriteDatabaseId,config.appwriteCollectionId, ID.unique(),{title, slug, status, content, featuredImage, userId})
    }

    async deletePost (slug){
     return  await  this.databases.deleteDocument(config.appwriteDatabaseId,config.appwriteCollectionId, slug)
    }

    async getPost (slug){
     return  await  this.databases.getDocument(config.appwriteDatabaseId,config.appwriteCollectionId, slug)
    }

    async getPosts (queries=[Query.equal('status', "active")]){
     return  await  this.databases.getDocument(config.appwriteDatabaseId,config.appwriteCollectionId,queries)
    }

    // file upload services

    async fileUpload(file){
       return await this.storage.createFile(config.appwriteBucketId,ID.unique(),file)
    }
    async deleteFile(fileID){
     return await this.storage.deleteFile(config.appwriteBucketId,fileID)
  }

  async previewFile(fileID){
     return await this.storage.getFilePreview(config.appwriteBucketId,fileID)
  }

   

}

const service = new Service()

export default service;