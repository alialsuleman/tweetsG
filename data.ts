
let patterns: any = [];

patterns[0] = [
    "  feel concerned there is a fire in {location} at {time}, is it under control?",
    "  am worried about a minor fire in {location} since {time}, any updates?",
    "  feel a sense of urgency due to a small fire in {location} that started {time} ago",
    "  am troubled by a fire in {location}, started {time} ago. Is the situation stable?",
    "  am uneasy about a fire in {location} that began {time} ago. Any developments?",
    "  feel a mix of fear and sorrow as there is a fire in {location}. Is it contained since {time}?",
    "  am on edge due to a small fire in {location} that started {time} ago. How is it progressing?",
    "  am concerned about a fire in {location} that began {time} ago. Is it being managed?",
    "  feel worried as there is a minor fire in {location} at {time}. What's the current status?",
    "  am anxious about a fire in {location} that started {time} ago. Any information on its status?",
    "  feel concerned about a fire in {location} that started {time} ago. Any updates on containment?",
    "  am worried there is a small fire in {location} at {time}. Is it still ongoing?",
    "  feel uneasy about a fire in {location} that began {time} ago. What actions are being taken?",
    "  am troubled by a minor fire in {location} since {time}. Is it under control?",
    "  am concerned about a fire in {location} at {time}. Any information on the situation?",
    "  feel a mix of fear and sorrow as there is a fire in {location} that started {time} ago. What measures are in place?",
    "  am on edge due to a small fire in {location} at {time}. Is it spreading?",
    "  am worried about a fire in {location} that began {time} ago. Any developments?",
    "  feel anxious there is a fire in {location} at {time}. How severe is it?",
    "  am concerned about a minor fire in {location} since {time}. What's the current status?",
    "  feel concerned there is a fire in {location} at {time}. How quickly is it spreading?",
    "  am worried about a small fire in {location} that started {time} ago. Any updates on containment?",
    "  feel uneasy there is a fire in {location} since {time}. Is it posing a threat?",
    "  am troubled by a minor fire in {location} at {time}. What measures are being taken?",
    "  am concerned about a fire in {location} that began {time} ago. Is it under control?",
    "  feel a mix of fear and sorrow as there is a fire in {location} at {time}. Any information on the situation?",
    "  am on edge due to a small fire in {location} that started {time} ago. What's the current status?",
    "  am worried about a fire in {location} at {time}. Any developments?",
    "  feel anxious there is a minor fire in {location} since {time}. How severe is it?",
    "  am concerned about a fire in {location} that started {time} ago. Is it spreading?",
    "  feel uneasy there is a fire in {location} at {time}. Has it been contained?",
    "  am concerned about a small fire in {location} that started {time} ago. Any updates on control efforts?",
    "  feel worried there is a fire in {location} since {time}. What measures are being taken?",
    "  am troubled by a minor fire in {location} at {time}. Is it under control?",
    "  am concerned about a fire in {location} that began {time} ago. How is it being managed?",
    "  feel a mix of fear and sorrow as there is a fire in {location} at {time}. Any information on containment?",
    "  am on edge due to a small fire in {location} that started {time} ago. What's the current status?",
    "  am worried about a fire in {location} at {time}. Any developments?",
    "  feel anxious there is a minor fire in {location} since {time}. How severe is it?",
    "  am concerned about a fire in {location} that started {time} ago. Is it spreading?"

]
patterns[1] = [
    "  feel alarmed there is a moderate fire in {location} at {time}. Is it escalating?",
    "  am uneasy about a significant fire in {location} since {time}. Any updates on containment?",
    "  feel a mix of concern and fear due to a notable fire in {location} that started {time} ago",
    "  am troubled by a moderate fire in {location}, started {time} ago. Is it under control?",
    "  am on edge due to a considerable fire in {location} that began {time} ago. What's the status?",
    "  feel apprehensive about a moderate fire in {location}. Has it been contained since {time}?",
    "  am concerned about a fire in {location} that began {time} ago. What measures are being taken?",
    "  feel worried as there is a significant fire in {location} at {time}. Any progress updates?",
    "  am anxious about a fire in {location} that started {time} ago. How is the situation evolving?",
    "  feel uneasy about a notable fire in {location} at {time}. Is there a containment plan in place?",
    "  feel alarmed about a significant fire in {location} that started {time} ago. Any updates on containment?",
    "  am uneasy there is a moderate fire in {location} at {time}. Is it still ongoing?",
    "  feel a mix of concern and fear due to a fire in {location} since {time}. What actions are being taken?",
    "  am troubled by a notable fire in {location} that began {time} ago. Is it under control?",
    "  am on edge due to a moderate fire in {location} at {time}. Any information on the situation?",
    "  feel apprehensive about a considerable fire in {location} that started {time} ago. What measures are in place?",
    "  am concerned about a fire in {location} since {time}. Is it spreading?",
    "  feel worried there is a significant fire in {location} at {time}. Any developments?",
    "  am anxious about a moderate fire in {location} that began {time} ago. How severe is it?",
    "  feel uneasy about a notable fire in {location} at {time}. What's the current status?",
    "  feel alarmed about a significant fire in {location} at {time}. How quickly is it escalating?",
    "  am uneasy there is a moderate fire in {location} that started {time} ago. Any updates on containment?",
    "  feel a mix of concern and fear due to a notable fire in {location} since {time}. Is it posing a threat?",
    "  am troubled by a moderate fire in {location} at {time}. What measures are being taken?",
    "  am on edge due to a considerable fire in {location} that started {time} ago. Is it under control?",
    "  feel apprehensive about a moderate fire in {location} at {time}. Any information on the situation?",
    "  am concerned about a fire in {location} since {time}. What's the current status?",
    "  feel worried there is a significant fire in {location} at {time}. Any developments?",
    "  am anxious about a moderate fire in {location} that started {time} ago. How severe is it?",
    "  feel uneasy about a notable fire in {location} at {time}. Is it spreading?",
    "  feel troubled there is a significant fire in {location} at {time}. How quickly is it escalating?",
    "  am uneasy about a moderate fire in {location} that started {time} ago. Any updates on containment?",
    "  feel a mix of concern and fear due to a notable fire in {location} since {time}. Is it posing a threat?",
    "  am alarmed by a moderate fire in {location} at {time}. What measures are being taken?",
    "  am on edge due to a considerable fire in {location} that started {time} ago. Is it under control?",
    "  feel concerned about a moderate fire in {location} at {time}. Any information on the situation?",
    "  am worried there is a fire in {location} since {time}. What's the current status?",
    "  feel uneasy there is a significant fire in {location} at {time}. Any developments?",
    "  am anxious about a moderate fire in {location} that started {time} ago. How severe is it?",
    "  feel apprehensive about a notable fire in {location} at {time}. Is it spreading?"
]
patterns[2] = [
    "  feel terrified there is a severe fire in {location} at {time}. Are evacuations in progress?",
    "  am deeply concerned about a major fire in {location} since {time}. What emergency measures are in place?",
    "  feel a sense of urgency and fear due to a critical fire in {location} that started {time} ago",
    "  am troubled by a severe fire in {location}, started {time} ago. How severe is the situation?",
    "  am on edge due to a dangerous fire in {location} that began {time} ago. What's the emergency response?",
    "  feel a mix of fear and sorrow as there is a critical fire in {location}. Any updates on evacuations?",
    "  am anxious about a severe fire in {location} that began {time} ago. What's the status of firefighting efforts?",
    "  am deeply worried as there is a major fire in {location} at {time}. Is the area being evacuated?",
    "  feel terrified about a fire in {location} that started {time} ago. What safety precautions are in place?",
    "  am on edge due to a critical fire in {location} at {time}. How severe is the impact on the surrounding areas?",
    "  feel terrified about a severe fire in {location} that started {time} ago. Any updates on containment?",
    "  am deeply concerned there is a major fire in {location} at {time}. Is it still ongoing?",
    "  feel a sense of urgency and fear due to a critical fire in {location} since {time}. What actions are being taken?",
    "  am troubled by a severe fire in {location} that began {time} ago. Is it under control?",
    "  am on edge due to a dangerous fire in {location} at {time}. Any information on the situation?",
    "  feel a mix of fear and sorrow as there is a critical fire in {location} that started {time} ago. What measures are in place?",
    "  am anxious about a severe fire in {location} at {time}. Is it spreading?",
    "  am deeply worried there is a major fire in {location} that began {time} ago. Any developments?",
    "  feel terrified about a fire in {location} at {time}. How severe is it?",
    "  am on edge due to a critical fire in {location} that started {time} ago. What's the current status?",
    "  feel terrified about a severe fire in {location} that started {time} ago. How quickly is it escalating?",
    "  am deeply concerned there is a major fire in {location} at {time}. Any updates on evacuations?",
    "  feel a sense of urgency and fear due to a critical fire in {location} since {time}. Is it posing a threat?",
    "  am troubled by a severe fire in {location} at {time}. What emergency measures are in place?",
    "  am on edge due to a dangerous fire in {location} that started {time} ago. Is it under control?",
    "  feel a mix of fear and sorrow as there is a critical fire in {location} at {time}. Any information on evacuations?",
    "  am anxious about a severe fire in {location} since {time}. What's the status of firefighting efforts?",
    "  am deeply worried there is a major fire in {location} at {time}. How severe is the impact on the surrounding areas?",
    "  feel terrified about a fire in {location} that started {time} ago. Any updates on evacuations?",
    "  am on edge due to a critical fire in {location} at {time}. Is it still ongoing?",
    "  feel deeply concerned about a severe fire in {location} that started {time} ago. How quickly is it escalating?",
    "  am troubled there is a major fire in {location} at {time}. Any updates on evacuations?",
    "  feel a sense of urgency and fear due to a critical fire in {location} since {time}. Is it posing a threat?",
    "  am terrified by a severe fire in {location} at {time}. What emergency measures are in place?",
    "  am on edge due to a dangerous fire in {location} that started {time} ago. Is it under control?",
    "  feel a mix of fear and sorrow as there is a critical fire in {location} at {time}. Any information on evacuations?",
    "  am anxious about a severe fire in {location} since {time}. What's the status of firefighting efforts?",
    "  am deeply worried there is a major fire in {location} at {time}. How severe is the impact on the surrounding areas?",
    "  feel terrified about a fire in {location} that started {time} ago. Any updates on evacuations?",
    "  am on edge due to a critical fire in {location} at {time}. Is it still ongoing?"
]