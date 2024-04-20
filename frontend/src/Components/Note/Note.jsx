import React from "react"

const Note = (props) => {
  return (
    <div className="col-md-10 mx-auto m-3">
        <div class="card w-22 text-center">
            <div class="card-header">
                <h5 class="card-title">Special title treatment</h5>
            </div>
            <div class="card-body">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                
            </div>
            <div class="card-footer d-flex justify-content-between align-items-end">
                2 days ago
                <div class="row">
                    <form class="col-md-6" action="/">
                        <button type="submit" class="btn btn-primary px-3 mx-2 mb-0 custom-bg-btn">Update</button>
                    </form>
                    <form class="col-md-6" action="/">
                        <button type="submit" class="btn btn-danger px-3 mx-2">Delete</button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    
  )
};

export default Note;
