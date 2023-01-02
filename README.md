# Reporduction Steps

- yarn install
- yarn serve


# Project Layout

    |- package.json
    |- packages/
      |- core                     // Base components
        |- src/models             // Model Definitions, abstract Base, Scope, Person
        |- src/entities           // EntitySchema definitions
        |- src/core.module        // Module with feature imports
      |- employee                 // Actual project, employee information
        |- src/models             // Single table models, Employees, Gig workers
        |- src/entities
        |- src/employee.module    // Nest Application
