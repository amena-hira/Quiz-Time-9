import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is the purpose of react router?
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <strong>The primary goal of Router in React JS is to supply the browser with an asynchronous URL that corresponds to the data that will show on the web page.</strong> It is mainly used to create single-page web apps since it retains the application's regular structure and functionality.

                    The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How does context api works?
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    Context is a built-in API introduced in ​​React 16.3. <strong>It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.</strong> It can be used to solve the same problems as Redux does, but it doesn’t provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Write about useref hook.
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    The useRef Hook allows you to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when updated.
                    It can be used to access a DOM element directly.
                    <strong>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                    To avoid this, we can use the useRef Hook.</strong>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;