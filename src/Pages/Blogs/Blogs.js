import React from "react";
import jscapture from "../../images/jscapture.PNG";

const Blogs = () => {
  return (
    <div className="bg-base-100 shadow-xl mb-12 p-12 d-block">
      <div className="inventory-text my-5">
        <div className="mt-1">
          <p className="inventory-textbox ">
            <p className="text-lg card-title">
              How will you improve the performance of a React Application?
            </p>
          </p>
          <p className="inventory-textbox">
            <p className=" text-base card-title">
              Using Production Build Before deploying a React App the best
              practice is to run npm build to create a minified version of the
              project. As React consists a lot of files that makes the project
              bigger and slower. Doing to optimizes the performance. Avoid
              Reconciliation React builds and maintains an internal
              representation of the rendered UI. It includes the React elements
              you return from your components. This representation lets React
              avoid creating DOM nodes and accessing existing ones beyond
              necessity, as that can be slower than operations on JavaScript
              objects. Sometimes it is referred to as a “virtual DOM”. When a
              component’s props or state change, React decides whether an actual
              DOM update is necessary by comparing the newly returned element
              with the previously rendered one. When they are not equal, React
              will update the DOM. No Mutation of data Instead of directly
              mutating react objects it is better to use spread operators that
              optimizes performance
            </p>
          </p>
        </div>
      </div>
      <div className="inventory-text my-5">
        <div className="mt-1">
          <p className="inventory-textbox ">
            <p className="text-lg card-title">
              What are the different ways to manage a state in a React
              application?
            </p>
          </p>
          <p className="inventory-textbox">
            <p className=" text-base card-title">
              1. Using Hooks like setState to update the value of state 2. Using
              Redux 3. Using context Api to avoid props drilling.
            </p>
          </p>
        </div>
      </div>
      <div className="inventory-text my-5">
        <div className="mt-1">
          <p className="inventory-textbox ">
            <p className="text-lg card-title">
              How does prototypical inheritance work?
            </p>
          </p>
          <p className="inventory-textbox">
            <p className=" text-base card-title">
              The Prototypal Inheritance is a method by which an object can
              inherit the properties and methods of another object. In easier
              words, it refers to the ability to access object properties from
              another object. For example, if we have an object named user and
              another name admin. Now we want to use few properties and methods
              of user in admin just by slightly modifying it. Prototypal
              Inheritance is the way to do it. It allows us to reuse the
              properties or methods from one JavaScript object to another
              through a reference pointer function.
            </p>
          </p>
        </div>
      </div>
      <div className="inventory-text my-5">
        <div className="mt-1">
          <p className="inventory-textbox ">
            <p className="text-lg card-title">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </p>
          </p>
          <p className="inventory-textbox">
            <p className=" text-base card-title">
              When the states’ value is updated directly, it creates a pending
              state transition instead of changing it immediately, and accessing
              it after calling this method will only return the present value.
              Which also ends up loosing control of states’ value across all
              components. Mutating state directly can lead to odd bugs, and
              components that are hard to optimize. React can keep track of
              changes to state and props easily - it can't (nothing in
              JavaScript can) keep track of reassigned variables automatically.
              Calling a state setter like setNumber tells React to: 1. Update
              React's internal state data for this component 2. Re-render the
              component
            </p>
          </p>
        </div>
      </div>
      <div className="inventory-text my-5">
        <div className="mt-1">
          <p className="inventory-textbox ">
            <p className="text-lg card-title">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </p>
          </p>
          <p className="inventory-textbox">
            <p className=" text-base card-title">
              <img src={jscapture} alt="" />
            </p>
          </p>
        </div>
      </div>
      <div className="inventory-text my-5">
        <div className="mt-1">
          <p className="inventory-textbox ">
            <p className="text-lg card-title">
              What is a unit test? Why should write unit tests?
            </p>
          </p>
          <p className="inventory-textbox">
            <p className=" text-base card-title">
              UNIT TESTING is a type of software testing where individual parts
              of implementations are tested. The sole reason behind this is to
              validate each unit of the code performs as expected. Unit Testing
              is done during the development of an application by the
              developers. Unit Tests isolate a section of code and verify its
              correctness. A unit may be an individual function, method,
              procedure, module, or object.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
