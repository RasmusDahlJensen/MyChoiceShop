
export const calculateReviews = (reviewData) => {
    let numberOfRatings = 0;
    let rate = null;

    reviewData.map(({rating, n_rating}) => {
        rate += rating * n_rating;
        numberOfRatings += n_rating;
    })
    rate = rate / numberOfRatings
    
    return rate.toFixed(1)
}