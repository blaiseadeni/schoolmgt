import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { StudentsService } from '../../services/students.service';
// Import Models
import { Students } from '../../domain/schoolmgt_db/students';

// START - USED SERVICES
/**
* studentsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* studentsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Students
 * @class StudentsListComponent
 */
@Component({
    selector: 'app-students-list',
    templateUrl: './students-list.component.html',
    styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
    list: Students[];
    search: any = {};
    idSelected: string;
    constructor(
        private studentsService: StudentsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.studentsService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Students to remove
     *
     * @param {string} id Id of the Students to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Students
     */
    deleteItem() {
        this.studentsService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
