
var RideSharingSystem = function() {

    this.rider = [];
    this.driver =[];
    this.riderSet = new Set();
    
};

/** 
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.addRider = function(riderId) {

    this.rider.push(riderId);
    this.riderSet.add(riderId);
    
};

/** 
 * @param {number} driverId
 * @return {void}
 */
RideSharingSystem.prototype.addDriver = function(driverId) {
    this.driver.push(driverId);
};

/**
 * @return {number[]}
 */
RideSharingSystem.prototype.matchDriverWithRider = function() {

    let riderwith =[this.driver, this.rider];

    while(this.driver.length && this.rider.length)
        {

            let riderId = this.rider.shift();

            if(!this.riderSet.has(riderId)) continue;

            let driverId = this.driver.shift();

            this.riderSet.delete(riderId);
            return [driverId, riderId];
            
        }



    return [-1, -1]
};



/** 
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.cancelRider = function(riderId) {

    this.riderSet.delete(riderId);
};

