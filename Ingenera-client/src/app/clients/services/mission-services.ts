import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class MissionService {


    constructor() { }
    create(mission) {
        console.log('create new mission', mission)
        return axios.post('api/mission/create', mission)
    }


    getMissionsByStatus(statusId,userId) {
        return axios.get(`api/mission/client/${userId}/status/${statusId}`)
    }
    getMissionsById(missionId) {
        return axios.get(`api/mission/misisonById/${missionId}`)
    }

    updateMission(mission) {
        return axios.post(`api/mission/update`,mission)
    }

    getAllMissionsByClient(userId){
        return axios.get(`api/allMissionsById/${userId}`)
    }

}