//Libraries Initializations
#include <iostream>
// IOStream declares the following: [cin, cout, cerr,clog] and the wide-character counterparts. Note that it is not just a combination of <istream> and <ostream>
#include <fstream>
// Defines the basic_filebuf, basic_ifstream, basic_ofstream, and basic_fstream classes. Declares the filebuf, wfilebuf, ifstream, wifstream, ofstream wofstream, fstream, and wfstream typedefs
#include <iomanip>
// Declares the I/O manipulators not declared elsewhere(mostly in <ios>)
#include <vector>
// The vector class template and the vector<bool> specialization
#include <cmath>
// Math Utilities, including trigonometric functions, srqt(), fabs(), and others
#include <algorithm>
// Prototypes for most of the algorithms in the STL(Standard Template Library)
// Using Namespace STD
using namespace std;
// the above allows a Developer to opt out from using STD:: every time

// The Standard Template Library (STL), supports various containers and algorithms.
// The STL provides implementations of commonly-used data structures such as linked lists and queues. 
// Data Structures are implemented using a concept called containers, which would store information called elements, in a way that implements the data structure (linked list, queue, etc) appropriately.
// Different data structures have different insertions, deletion, access behaviour and performance characteristics.
// The C++ STL Containers are homogenous which would only allow elements of only one type in each container.

// A function to calculate the mean value of a set of "n" vectors each of dimension "n" namely a (n x n) matrix
vector <double> VMean(vector<vector<double>>X, int n)
{
    vector<double> meanX(n);
        for(int i = 0; i <= n - 1; i++)
        {
            meanX[i] = 0.0;
            for(int j = 0; j <= n -1; j++)
            {
                meanX[i] += X[i][j];
            }
            meanX[i] = meanX[i] / n;
        }
    return meanX;
}

// Function to add two vectors together
vector<double> VAdd(vector<double> x, vector<double> y)
{
    int n = x.size();
    vector<double> z(n, 0.0);
        for(int j = 0; j <=n-1; j++)
            z[j] = x[j] + y[j];
    
    return z;
}

// Function to substract two vectors
vector<double> VSub(vector<double> x, vector<double> y)
{
    int n = x.size();
    vector<double> z(n, 0.0);
        for(int j = 0; j <= n - 1; j++)
            z[j] = x[j] - y[j];
    return z;
}

//Function to multiply a vector by a constant
vector<double> VMult(vector<double> x, double a)
{
    int n = x.size();
    vector<double> z(n, 0.0);
        for(int j = 0; j <= n -1; j++)
            z[j] = a*x[j];
    return z;
}

// Sum of a vector
double VecSum(vector<double> x)
{
    int n = x.size();
    double Sum = 0.0;;
    for (int i=0; i <= n -1; i++)
        Sum += x[i];
    return Sum;
}

// Calculates unbiased sample variance
double VecVar(vector<double> x)
{
    double n = x.size();
    double sumM = 0.0;
    for(int i = 0; i <= n - 1; i++)
        sumM += x[i];
    double mean = sumM / n;
    double sumV = 0.0;
    for(int i = 0; i <= n-1; i++)
        sumV += (x[i] - mean) * (x[i] - mean);
    return sumV / (n-1);
}

// Nelder Mean Algorithm
vector<double> NelderMean(double (*f)(vector<double>), int N, double Numiters, double MaxIters, double Tolerance, vector<vector<double>> x)
{
    int i, j;

    // Value of the function at the vertices
    vector<vector<double>> F(N+1, vector<double>(2));

    // Step 0. Ordering and Best and Worst points
    // Order according to the functional values, compute the best and worst points

    step0:
    int NumIters = NumIters + 1;
    for (j = 0; j <= N; j++)
        {
            vector<double> z(N,0.0);
            for (i=0; i<=N-1; i++)
                z[i] = x[i][j];
            F[j][0] = f(z);
            F[j][1] = j;
        }
    sort(F.begin(), F.end());

}

int main()
{
    cout << "hello world!" << endl;
    VMean(2.0,3);
}