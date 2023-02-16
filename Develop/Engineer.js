const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "employee";
    }
    getGithub() {
        return "github";
    }
}
module.exports = Engineer;
