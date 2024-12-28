#include <iostream>
#include <vector>
#include <queue>
#include <climits>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int N, M;
    cin >> N >> M;

    vector<vector<pair<int, int>>> graph(N + 1);
    for (int i = 0; i < M; i++)
    {
        int s, e, c;
        cin >> s >> e >> c;
        graph[s].push_back({e, c});
    }

    int startCity, endCity;
    cin >> startCity >> endCity;

    vector<int> dist(N + 1, INT_MAX);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

    pq.push({0, startCity});
    dist[startCity] = 0;

    while (!pq.empty())
    {
        int cost = pq.top().first;
        int current_city = pq.top().second;
        pq.pop();

        if (dist[current_city] < cost)
            continue;

        for (auto &neighbor : graph[current_city])
        {
            int next_city = neighbor.first;
            int next_cost = cost + neighbor.second;

            if (next_cost < dist[next_city])
            {
                pq.push({next_cost, next_city});
                dist[next_city] = next_cost;
            }
        }
    }

    cout << dist[endCity] << endl;

    return 0;
}
