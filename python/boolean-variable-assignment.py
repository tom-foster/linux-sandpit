#an example using booleans to assign a variable
# Running the below will result instead of drivers_licence being assigned as True but as 'Has a driving licence"
drivers_licence = True
drivers_test = (drivers_licence == True and 'Has a driving licence') or 'We have a problem! No drivers licence'
print(drivers_test)


# The below assigns pilots_licence as Mayday, as it's only true at the order statement
pilots_licence = False
pilots_test = (pilots_licence == True and 'Has a pilots licence') or 'Mayday! No pilots licence'
print(pilots_test)