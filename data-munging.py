#example of data munging
#tf 14/04/17

#define the data
student_data = [
    {'name': 'Bob', 'id': 0, 'scores':[68, 75, 56, 81]},
    {'name': 'Alice', 'id': 1, 'scores': [75, 90, 64, 88]},
    {'name': 'Carol', 'id': 2, 'scores': [59, 74, 71, 68]},
    {'name': 'Dan', 'id': 3, 'scores': [64, 58, 53, 62]},
]

#define the function
def process_student_data(data, pass_threshold=60,
                        merit_threshold=75):
    """ Perform some basic stats on some student data. """

    # for loop
    for sdata in data:
        # take the average of the scores
        avg = sum(sdata['scores'])/float(len(sdata['scores']))
        sdata['average'] = avg

        if avg > merit_threshold:
            sdata['assessment'] = 'passed with merit'
        elif avg > pass_threshold:
            sdata['assessment'] = 'passed'
        else:
            sdata['assessment'] = 'failed'

        print("%s's (id: %d) final assessment is: %s" %(
            sdata['name'], sdata['id'], sdata['assessment'].upper()))

if __name__ == '__main__':
    process_student_data(student_data)
