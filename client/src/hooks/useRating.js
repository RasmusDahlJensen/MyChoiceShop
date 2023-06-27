
export const calculateReviews = (reviewData) => {
    let numberOfRatings = 0;
    let rate = null;

    reviewData.map(({rating, n_rating}) => {
    console.log(rating, n_rating);
        rate += rating;
        numberOfRatings += n_rating;
    })
    rate = rate / numberOfRatings
    
    return rate
}