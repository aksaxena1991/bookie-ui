import React from 'react';
function MainPage(){
    return(
        <div className="mainPage">
            <div class="row">
                <div class="col s12">This div is 12-columns wide on all screen sizes</div>
                <div class="col s6">6-columns (one-half)</div>
                <div class="col s6">6-columns (one-half)</div>
                <div class="col s6 offset-s6"><span class="flow-text">6-columns (offset-by-6)</span></div>
                <div class="col s7 push-s5"><span class="flow-text">This div is 7-columns wide on pushed to the right by 5-columns.</span></div>
      <div class="col s5 pull-s7"><span class="flow-text">5-columns wide pulled to the left by 7-columns.</span></div>
      
            </div>
        </div>
    );
}
export default MainPage;