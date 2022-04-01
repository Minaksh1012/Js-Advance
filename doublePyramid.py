n = 5

# downward pyramid
# for i in range(n-1):
#     for j in range(i):
#         print(' ', end=' ')
#     for k in range(2*(n-i)-1):
#         print('*', end=' ')
#     print()
# # upward pyramid
# for i in range(n):
#     for j in range(n-i-1):
#         print(' ', end=' ')
#     for k in range(2*i+1):
#         print('*', end=' ')
#     print()





# n = 5

# for i in range(1, n+1):
#     # internal loop run for i times
#     for k in range(1, i+1):
#         print("*", end="")
#     # print()
#     # size = 5
#     # for i in range(n):
#     for j in range(1, n - i):
#         print(" ", end="")
#     for k in range(0, i + 1):
#         print("*", end="")
#     print()



n=5
i=0
while i<n+1:
    k=1
    while k<i+1:
        print("*",end=" ")
        k+=1
    # print()
    # i+=1   
    j=1
    while j<n-i:
        print(" ",end=" ")
        j+=1
    k=1
    while k<i+1:
        print("*",end=" ")   
        k+=1      
    print()   
    i+=1
    print()    