# python/simulate_battle.py

import json

class General:
    def __init__(self, name, strength, intelligence, speed):
        self.name = name
        self.strength = strength
        self.intelligence = intelligence
        self.speed = speed

class Tactic:
    def __init__(self, name, effect):
        self.name = name
        self.effect = effect

class Book:
    def __init__(self, name, effect):
        self.name = name
        self.effect = effect

def simulate_battle(team1, team2):
    # 簡單計算隊伍的總戰力
    power_team1 = sum([general.strength + general.intelligence + general.speed for general in team1['generals']])
    power_team1 += sum([tactic.effect for tactic in team1['tactics']])
    power_team1 += sum([book.effect for book in team1['books']])
    
    power_team2 = sum([general.strength + general.intelligence + general.speed for general in team2['generals']])
    power_team2 += sum([tactic.effect for tactic in team2['tactics']])
    power_team2 += sum([book.effect for book in team2['books']])

    winner = 'team1' if power_team1 > power_team2 else 'team2' if power_team1 < power_team2 else 'draw'
    
    return {
        'winner': winner,
        'power_team1': power_team1,
        'power_team2': power_team2
    }

if __name__ == '__main__':
    # 示例隊伍數據
    team1 = {
        'generals': [General('劉備', 80, 85, 75)],
        'tactics': [Tactic('連環計', 10)],
        'books': [Book('孫子兵法', 20)]
    }
    
    team2 = {
        'generals': [General('關羽', 95, 80, 85)],
        'tactics': [Tactic('火攻', 15)],
        'books': [Book('武經七書', 25)]
    }
    
    result = simulate_battle(team1, team2)
    print(json.dumps(result, ensure_ascii=False))
