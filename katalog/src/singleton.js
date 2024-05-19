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
                    console.log("Worker was added successfully");
                });
            } else {
                console.error("Worker was not added. Unexpected status:", response.status);
            }
        } catch (error) {
            console.error("Error adding worker:", error);
        }
    }
}
export default new Singleton();