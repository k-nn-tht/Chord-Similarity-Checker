def solution(candlesNumber, makeNew):
    leftovers = candlesNumber
    burned = candlesNumber
    candlesNumber = 0
    if leftovers < makeNew:
        return burned
    while leftovers > makeNew:
        canMake = leftovers//makeNew
        candlesNumber += canMake
        leftovers -= (canMake//makeNew)makeNew
        leftovers += canMake
        burned += canMake
    return burned

solution(3,3)
