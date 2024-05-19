import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import axios from "axios";
// import { log } from 'util';

const apiUrl = process.env.REACT_APP_Swagger;

class Singleton {

    List = [];

   
    constructor() {
        makeAutoObservable(this, {
            List: observable,
            getList: action,
            // postWorker: action,
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

    postWorker(formData) {
        axios.post(apiUrl, formData) .then((res) => {
            if (res.status === 200) {
                runInAction(() => {
                    this.List.push(res.data);
                    console.log("Worker was added successfully");
                });
            } else {
                console.error("Worker was not added. Unexpected status:", res.status);
            }
        })
        .catch((error) => {
            console.error("Error adding worker:", error);
        });
        // try {
        //     const response = axios.post(apiUrl, formData);
        //     if (response.status === 200) {
        //          runInAction(() => {
        //             console.log(response.data)
        //             this.List.push(response.data);
        //             console.log("User added successfully.");
        //          });
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
export default new Singleton();