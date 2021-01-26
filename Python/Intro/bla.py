# def sum(a,b,*numbers, **kwargs):
#     print(kwargs)
#     total = a+b

#     for n in numbers:
#         total += n if type(n) == int or type(n)== float else 0

#     for key in kwargs:
#         total += kwargs[key]

#     return total

# print(sum(1, 2, 3, 4, 5, 6, 7, 1.4, "abc", True))

# def check_div(n):
#     return n % 3 == 0 and n % 5 == 0

# print(check_div(int(input("nhap n: "))))

# def tg(a, b, c):
#     return a+b > c and a+c > b and b+c > a


# a = int(input("nhap a: "))
# b = int(input("nhap b: "))
# c = int(input("nhap c: "))

# print(tg(a, b, c))

# def inc(a,b,c):
#     if a<b<c:
#         print("{a}, {b}, {c} la day tang dan")
#     elif a > b > c:
#         print("{a}, {b}, {c} la day tang dan")
#     else:
#         print("day khong tang dan khong giam dan")

# def alp(n):
#     if "a" <= n <= "z":
#         print(f"{n} thuoc bang chu cai")
#     elif "A" <= n <= "Z":
#         print(f"{n} thuoc bang chu cai viet hoa")
#     else:
#         print(f"{n} khong phai la 1 ki tu")


# n = input("Nhap 1 ki tu: ")
# alp(n)


# def season(m):
#     season = "mua xuan " if 1 <= month <= 3 else "mua he" if 4 <= n <= 6 else "mua thu" if 7 <= n <= 9 else "mua dong" if 10 <= n <= 12 else None

def avg_multiple():
    total = 0
    count = 0
    list_of_number=""

    while True:
        number = input("Enter a number: ")
        
    if number.lower() == 'q' or number.lower() == 'c':
        print("exit")
        return total/count
    else:
        count +=1
        total += int(number)
        list_of_number += " " + number
        print(f"List of numbers: [{list_of_number}]")
        print(f"Average of numbers: {total / count}")


print(avg_multiple())
