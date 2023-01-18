import React from "react";

function Card() {
  return (
    <div>
      <div class="card text-center">
        <div class="card-header">
          <h3 class="card-title">CardHeader</h3>
        </div>
        <div
          class="card-body d-flex align-items-center justify-content-center"
          style={{ height: "300px" }}
        >
          <div class="">
            <h4>A text above the button</h4>
            <button class="btn btn-primary mt-2 text-center">
              <i class="fa fa-plus mr-1" />
              <span>Add Button</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
