// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentsService } from '../../services/students.service';
// Import Models
import { Students } from '../../domain/schoolmgt_db/students';

// START - USED SERVICES
/**
* studentsService.create
*	@description CRUD ACTION create
*
* studentsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* studentsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Students
 */
@Component({
    selector: 'app-students-edit',
    templateUrl: 'students-edit.component.html',
    styleUrls: ['students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {
    item: Students;
    model: Students;
    formValid: Boolean;

    constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Students();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentsService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Students
     *
     * @param {boolean} formValid Form validity check
     * @param Students item Students to save
     */
    save(formValid: boolean, item: Students): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentsService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentsService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



