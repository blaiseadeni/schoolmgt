import StudentsModelGenerated from "./generated/StudentsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = StudentsModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await StudentsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...StudentsModelGenerated,
  ...customModel
};
