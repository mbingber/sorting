describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array of length 1', function() {
    	var result = bubbleSort([1]);
    	expect(result).toEqual([1]);
    });
    it('handles a longer array', function() {
    	var result = bubbleSort([4,2,1,3]);
    	expect(result).toEqual([1,2,3,4]);
    });
    it('compares the correct amount of times', function() {
    	spyOn(window, 'bubbleSort').and.callThrough();
    	var arr = [4,2,1,3];
    	bubbleSort(arr);
    	var n  = arr.length;
    	expect(bubbleSort.calls.count()).toEqual(n*(n-1)/2);
    });
});