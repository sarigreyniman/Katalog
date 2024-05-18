import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import axios from "axios";

const apiUrl = process.env.REACT_APP_Swagger;

class Singleton {

    List = [];

   
    constructor() {
        makeAutoObservable(this, {
            List: observable,
            getList: action,
            postWorker: action,
        });
        this.init();
    }

    init() {
        this.getList();
    }

    async getList() {
        try {
            const response = await axios.get(apiUrl);
            runInAction(() => {
                this.List = response.data;
            });
        } catch (error) {
            console.log("Error getting users:", error);
        }
    }

    async postWorker(formData) {
        try {
            const response = await axios.post(apiUrl, formData);
            if (response.status === 200) {
                 runInAction(() => {
                    this.List.push(response.data);
                    console.log("User added successfully.");
                 });
            } else {
                console.error("Unexpected status:", response.status);
            }
        } catch (error) {
            if (error.response) {
                console.error("Server responded with a status:", error.response.status);
                console.error("Response data:", error.response.data);
            } else {
                console.error("Error adding user:", error.message);
            }
        }
        // try {
        //     const formDataToSend = new FormData();
        //     for (const key in formData) {
        //         formDataToSend.append(key, formData[key]);
        //     }

        //     const response = await axios.post(apiUrl, formDataToSend, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     });

        //     if (response.status === 200) {
        //         runInAction(() => {
        //             this.List.push(response.data);
        //             console.log("User added successfully.");
        //         });
        //     } else {
        //         console.error("Unexpected status:", response.status);
        //     }
        // } catch (error) {
        //     if (error.response) {
        //         console.error("Server responded with a status:", error.response.status);
        //         console.error("Response data:", error.response.data);
        //     } else {
        //         console.error("Error adding user:", error.message);
        //     }
        // }
    }  
  
}
const singletonInstance = new Singleton();
export default singletonInstance;