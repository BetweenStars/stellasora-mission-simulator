// --- 데이터 (제공된 내용) ---
const characters = [
    { name: "치토세", role: "딜러", trait: "지식추구", image: "images/char_chits.png" },
    { name: "나노하", role: "딜러", trait: "지식추구", image: "images/char_nanh.png" },
    { name: "프리지아", role: "밸런스", trait: "모험가", image: "images/char_frz.png" },
    { name: "미네르바", role: "밸런스", trait: "착실함", image: "images/char_minv.png" },
    { name: "미스티", role: "밸런스", trait: "기상천외", image: "images/char_misy.png" },
    { name: "치시아", role: "밸런스", trait: "수집광", "image": "images/char_chsa.png" },
    { name: "그레이", role: "딜러", trait: "지식추구", image: "images/char_grey.png" },
    { name: "나즈나", role: "서포터", trait: "수집광", image: "images/char_nazn.png" },
    { name: "코하쿠", role: "딜러", trait: "수집광", image: "images/char_kohk.png" },
    { name: "틸리아", role: "서포터", trait: "착실함", image: "images/char_tila.png" },
    { name: "카시미라", role: "밸런스", trait: "모험가", image: "images/char_kasm.png" },
    { name: "아야메", role: "밸런스", trait: "기상천외", image: "images/char_ayam.png" },
    { name: "세이나", role: "딜러", trait: "기상천외", image: "images/char_seina.png" },
    { name: "시먀오", role: "딜러", trait: "지식추구", image: "images/char_simy.png" },
    { name: "레이센", role: "밸런스", trait: "수집광", image: "images/char_rays.png" },
    { name: "징린", role: "밸런스", trait: "지식추구", image: "images/char_jingl.png" },
    { name: "크루니스", role: "밸런스", trait: "모험가", image: "images/char_crun.png" },
    { name: "카나체", role: "밸런스", trait: "모험가", image: "images/char_knac.png" },
    { name: "안즈", role: "서포터", trait: "모험가", image: "images/char_anzu.png" },
    { name: "플로라", role: "서포터", trait: "수집광", image: "images/char_flor.png" },
    { name: "테레사", role: "서포터", trait: "착실함", image: "images/char_ters.png" },
    { name: "코제트", role: "서포터", trait: "지식추구", image: "images/char_cozt.png" },
    { name: "캐러멜", role: "딜러", trait: "기상천외", image: "images/char_carm.png" },
    { name: "라루", role: "딜러", trait: "모험가", image: "images/char_laru.png" },
];

const stagesData = [
    { group: "동네 도우미", name: "금전적 보상 고급", role: { "딜러": 2, "밸런스": 1 }, trait: ["모험가", "지식추구"], requiredTotal: 3, image: "images/money.jpg" },
    { group: "동네 도우미", name: "경험 축적 고급", role: { "딜러": 2, "밸런스": 1 }, trait: ["모험가", "기상천외"], requiredTotal: 3, image: "images/exp.jpg" },
    { group: "동네 도우미", name: "레코드 재료 고급", role: { "밸런스": 2, "서포터": 1 }, trait: ["수집광", "모험가"], requiredTotal: 3, image: "images/record.jpg" },
    { group: "동네 도우미", name: "금전적 보상 중급", role: { "딜러": 1, "밸런스": 1 }, trait: ["모험가", "지식추구"], requiredTotal: 2, image: "images/money.jpg" },
    { group: "동네 도우미", name: "경험 축적 중급", role: { "딜러": 1, "밸런스": 1 }, trait: ["모험가", "기상천외"], requiredTotal: 2, image: "images/exp.jpg" },
    { group: "동네 도우미", name: "레코드 재료 중급", role: { "밸런스": 1, "서포터": 1 }, trait: ["수집광", "모험가"], requiredTotal: 2, image: "images/record.jpg" },
    { group: "동네 도우미", name: "금전적 보상 초급", role: { "밸런스": 1 }, trait: ["기상천외"], requiredTotal: 1, image: "images/money.jpg" },
    { group: "동네 도우미", name: "경험 축적 초급", role: { "딜러": 1 }, trait: ["기상천외"], requiredTotal: 1, image: "images/exp.jpg" },
    { group: "동네 도우미", name: "레코드 재료 초급", role: { "딜러": 1 }, trait: ["수집광"], requiredTotal: 1, image: "images/record.jpg" },
    { group: "미로 탐색", name: "여행가 승급 재료A 고급", role: { "딜러": 2, "서포터": 1 }, trait: ["착실함", "지식추구"], requiredTotal: 3, image: "images/charA.jpg" },
    { group: "미로 탐색", name: "여행가 승급 재료B 고급", role: { "딜러": 2, "서포터": 1 }, trait: ["수집광", "기상천외"], requiredTotal: 3, image: "images/charB.jpg" },
    { group: "미로 탐색", name: "여행가 승급 재료C 고급", role: { "밸런스": 2, "서포터": 1 }, trait: ["착실함", "기상천외"], requiredTotal: 3, image: "images/charC.jpg" },
    { group: "미로 탐색", name: "여행가 승급 재료A 중급", role: { "딜러": 1, "서포터": 1 }, trait: ["착실함", "지식추구"], requiredTotal: 2, image: "images/charA.jpg" },
    { group: "미로 탐색", name: "여행가 승급 재료B 중급", role: { "딜러": 1, "서포터": 1 }, trait: ["수집광", "기상천외"], requiredTotal: 2, image: "images/charB.jpg" },
    { group: "미로 탐색", name: "여행가 승급 재료C 중급", role: { "밸런스": 1, "서포터": 1 }, trait: ["착실함", "기상천외"], requiredTotal: 2, image: "images/charC.jpg" },
    { group: "미로 탐색", name: "여행가 승급 재료A 초급", role: { "서포터": 1 }, trait: ["모험가"], requiredTotal: 1, image: "images/charA.jpg" },
    { group: "미로 탐색", name: "여행가 승급 재료B 초급", role: { "딜러": 1 }, trait: ["수집광"], requiredTotal: 1, image: "images/charB.jpg" },
    { group: "미로 탐색", name: "여행가 승급 재료C 초급", role: { "밸런스": 1 }, trait: ["기상천외"], requiredTotal: 1, image: "images/charC.jpg" },
    { group: "성해 추적", name: "레코드 승급 재료A 고급", role: { "밸런스": 2, "서포터": 1 }, trait: ["착실함", "모험가"], requiredTotal: 3, image: "images/recA.jpg" },
    { group: "성해 추적", name: "레코드 승급 재료B 고급", role: { "딜러": 2, "서포터": 1 }, trait: ["수집광", "지식추구"], requiredTotal: 3, image: "images/recB.jpg" },
    { group: "성해 추적", name: "레코드 승급 재료C 고급", role: { "딜러": 1, "밸런스": 2 }, trait: ["기상천외", "지식추구"], requiredTotal: 3, image: "images/recC.jpg" },
    { group: "성해 추적", name: "레코드 승급 재료A 중급", role: { "밸런스": 1, "서포터": 1 }, trait: ["착실함", "모험가"], requiredTotal: 2, image: "images/recA.jpg" },
    { group: "성해 추적", name: "레코드 승급 재료B 중급", role: { "딜러": 1, "서포터": 1 }, trait: ["수집광", "지식추구"], requiredTotal: 2, image: "images/recB.jpg" },
    { group: "성해 추적", name: "레코드 승급 재료C 중급", role: { "딜러": 1, "밸런스": 1 }, trait: ["기상천외", "지식추구"], requiredTotal: 2, image: "images/recC.jpg" },
    { group: "성해 추적", name: "레코드 승급 재료A 초급", role: { "밸런스": 1 }, trait: ["모험가"], requiredTotal: 1, image: "images/recA.jpg" },
    { group: "성해 추적", name: "레코드 승급 재료B 초급", role: { "서포터": 1 }, trait: ["수집광"], requiredTotal: 1, image: "images/recB.jpg" },
    { group: "성해 추적", name: "레코드 승급 재료C 초급", role: { "딜러": 1 }, trait: ["기상천외"], requiredTotal: 1, image: "images/recC.jpg" },
    { group: "카트리지 회수", name: "리듬 게임 의뢰 고급", role: { "딜러": 2, "밸런스": 1 }, trait: ["지식추구", "수집광"], requiredTotal: 3, image: "images/rythmn.jpg" },
    { group: "카트리지 회수", name: "슈팅 게임 의뢰 고급", role: { "밸런스": 2, "딜러": 1 }, trait: ["기상천외", "착실함"], requiredTotal: 3, image: "images/shooting.jpg" },
    { group: "카트리지 회수", name: "격투 게임 의뢰 고급", role: { "밸런스": 1, "서포터": 2 }, trait: ["착실함", "지식추구"], requiredTotal: 3, image: "images/fight.jpg" },
    { group: "카트리지 회수", name: "리듬 게임 의뢰 중급", role: { "딜러": 1, "밸런스": 1 }, trait: ["지식추구", "수집광"], requiredTotal: 2, image: "images/rythmn.jpg" },
    { group: "카트리지 회수", name: "슈팅 게임 의뢰 중급", role: { "딜러": 1, "밸런스": 1 }, trait: ["기상천외", "착실함"], requiredTotal: 2, image: "images/shooting.jpg" },
    { group: "카트리지 회수", name: "격투 게임 의뢰 중급", role: { "밸런스": 1, "서포터": 1 }, trait: ["착실함", "지식추구"], requiredTotal: 2, image: "images/fight.jpg" },
    { group: "카트리지 회수", name: "리듬 게임 의뢰 초급", role: { "딜러": 1 }, trait: ["지식추구"], requiredTotal: 1, image: "images/rythmn.jpg" },
    { group: "카트리지 회수", name: "슈팅 게임 의뢰 초급", role: { "밸런스": 1 }, trait: ["기상천외"], requiredTotal: 1, image: "images/shooting.jpg" },
    { group: "카트리지 회수", name: "격투 게임 의뢰 초급", role: { "밸런스": 1 }, trait: ["착실함"], requiredTotal: 1, image: "images/fight.jpg" },
];

const MAX_STAGES = 4;

// --- DOM 로드 시 실행 ---
document.addEventListener('DOMContentLoaded', () => {

    // --- DOM 요소 가져오기 ---
    const charContainer = document.getElementById('character-checkboxes');
    const stageContainer = document.getElementById('stage-groups');
    const runButton = document.getElementById('run-simulation');
    const resultsContainer = document.getElementById('placement-results');
    const ownedCountSpan = document.getElementById('owned-count');
    const selectAllBtn = document.getElementById('select-all-chars');
    const deselectAllBtn = document.getElementById('deselect-all-chars');

    // --- 초기화 함수 ---
    function initCharacters() {
        charContainer.innerHTML = '';
        characters.forEach(char => {
            const charId = `char-${char.name}`;
            const item = document.createElement('div');
            item.className = 'char-checkbox-item';
            item.innerHTML = `
                <input type="checkbox" id="${charId}" value="${char.name}">
                <label for="${charId}">
                    <img src="${char.image}" alt="${char.name}" class="char-image">
                    <strong>${char.name}</strong>
                    <span><span class="role">${char.role}</span></span>
                    <span><span class="trait">${char.trait}</span></span>
                </label>
            `;
            charContainer.appendChild(item);
        });
    }

    /** 2. 스테이지 목록 렌더링 (그룹화) */
    function initStages() {
        stageContainer.innerHTML = '';
        const groups = {}; 

        stagesData.forEach(stage => {
            if (!groups[stage.group]) {
                groups[stage.group] = [];
            }
            groups[stage.group].push(stage);
        });

        for (const groupName in groups) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'stage-group';

            let stageHTML = groups[groupName].map(stage => {
                const stageId = `stage-${stage.name}`;
                const roleReqs = Object.entries(stage.role)
                                     .map(([role, count]) => `${role} ${count}`)
                                     .join(', ');
                const traitReqs = stage.trait.join(', ');

                return `
                    <div class="stage-checkbox-item">
                        <input type="checkbox" id="${stageId}" value="${stage.name}">
                        <label for="${stageId}">
                            <img src="${stage.image}" alt="${stage.name}" class="stage-image">
                            <strong>${stage.name} (총 ${stage.requiredTotal}명)</strong>
                            <small>직업: ${roleReqs || '없음'}</small>
                            <br>
                            <small>성격: ${traitReqs || '없음'}</small>
                        </label>
                    </div>
                `;
            }).join('');

            groupDiv.innerHTML = `
                <h3>${groupName}</h3>
                <div class="stage-group-content">
                    ${stageHTML}
                </div>
            `;
            stageContainer.appendChild(groupDiv);
        }
    }

    // --- 이벤트 핸들러 (이전과 동일) ---
    function toggleAllChars(select) {
        charContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = select;
        });
        updateOwnedCount();
    }

    function updateOwnedCount() {
        const count = charContainer.querySelectorAll('input[type="checkbox"]:checked').length;
        ownedCountSpan.textContent = count;
    }

    function enforceStageLimit(e) {
        if (e.target.type !== 'checkbox') return;

        const checkedStages = stageContainer.querySelectorAll('input[type="checkbox"]:checked');
        if (checkedStages.length > MAX_STAGES) {
            alert(`스테이지는 최대 ${MAX_STAGES}개까지만 선택할 수 있습니다.`);
            e.target.checked = false;
        }
    }
    
    // --- 유틸리티 함수 ---

    /** 캐릭터 점수를 계산하는 함수 */
    function getCharScore(char, requiredRole, neededTraits) {
        let score = 0;
        
        // 직업이 맞지 않으면 0점 처리하고 바로 반환 (직업 필수!)
        if (char.role !== requiredRole) return 0; 

        // 직업이 맞을 경우
        score += 1; // 직업 일치 기본 점수 (1점)
        if (neededTraits.has(char.trait)) {
            score += 1; // 성격 일치 보너스 점수 (2점)
        }
        return score;
    }

    /** 스테이지 요구 직업을 슬롯 배열로 변환 */
    function getNeededRoleSlots(stage) {
        const slots = [];
        const neededTraits = new Set(stage.trait);
        
        const roleMap = stage.role;
        
        const highPrioritySlots = []; // 성격 시너지가 가능한 직업
        const lowPrioritySlots = []; // 일반 직업

        for (const [role, count] of Object.entries(roleMap)) {
            for (let i = 0; i < count; i++) {
                // 이 직업을 가진 캐릭터가 요구 성격 중 하나를 가진다면 고우선순위로 분류
                const hasMatchingTraitChar = characters.some(char => 
                    char.role === role && neededTraits.has(char.trait)
                );

                if (hasMatchingTraitChar) {
                    highPrioritySlots.push(role);
                } else {
                    lowPrioritySlots.push(role);
                }
            }
        }
        
        return [...highPrioritySlots, ...lowPrioritySlots];
    }


    /** 사용 가능한 캐릭터 중 가장 적합한 캐릭터를 찾는 헬퍼 함수 */
    function findBestChar(availableChars, requiredRole, neededTraits, minScore = 1) {
        let bestChar = null;
        let bestScore = -1;

        for (const char of availableChars) {
            const score = getCharScore(char, requiredRole, neededTraits);
            
            // minScore가 1 이상이므로, 직업이 맞지 않아 0점이 된 캐릭터는 자동으로 제외됨
            if (score >= minScore) { 
                if (score > bestScore) {
                    bestScore = score;
                    bestChar = char;
                }
            }
        }
        return bestChar;
    }

    // ===================================================================
    //  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ 사전 구성 가능성 확인 함수 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
    // ===================================================================

    /** 사전: 구성 가능한 파티 수를 계산 */
    function checkPreConditions(selectedStages, ownedChars) {
        
        // ----------------------------------------------------
        // CHECK 1: 완벽 파티 수 (직업 + 성격 모두 일치)
        // ----------------------------------------------------
        let ownedCharsForCheck1 = new Set(ownedChars);
        let perfectTraitCount = 0;
        
        for (const stage of selectedStages) {
            let rolesToFill = getNeededRoleSlots(stage); 
            const neededTraits = new Set(stage.trait);
            const party = [];
            
            for (const requiredRole of rolesToFill) {
                // 2점 요구: 직업(1점) + 성격(1점) = 2점
                let bestChar = findBestChar(ownedCharsForCheck1, requiredRole, neededTraits, 2); 
                
                if (bestChar) { 
                    party.push(bestChar);
                    ownedCharsForCheck1.delete(bestChar);
                } else {
                    // 2점 캐릭터를 찾지 못했으므로 이 스테이지는 완벽 파티 실패로 간주하고 다음 스테이지로 이동
                    break;
                }
            }
            
            // 파티가 완성되었고, 모든 성격 요구 사항을 충족했는지 최종 확인
            if (party.length === stage.requiredTotal) {
                const partyTraits = new Set(party.map(c => c.trait));
                const missingTraits = stage.trait.filter(t => !partyTraits.has(t));
                if (missingTraits.length === 0) {
                     perfectTraitCount++;
                }
            }
        }
        
        // ----------------------------------------------------
        // CHECK 2: 직업만 맞는 최대 파티 수 (인원수/직업만 일치)
        // ----------------------------------------------------
        let ownedCharsForCheck2 = new Set(ownedChars);
        let maxPartyCount = 0;
        
        for (const stage of selectedStages) {
            let rolesToFill = getNeededRoleSlots(stage); 
            const neededTraits = new Set(stage.trait);
            const party = [];
            
            for (const requiredRole of rolesToFill) {
                // 1점 요구: 직업만 일치해도 OK
                let bestChar = findBestChar(ownedCharsForCheck2, requiredRole, neededTraits, 1); 
                
                if (bestChar) {
                    party.push(bestChar);
                    ownedCharsForCheck2.delete(bestChar);
                } else {
                    // 직업조차 맞는 캐릭터가 없으면 이 파티는 실패
                    break; 
                }
            }
            
            if (party.length === stage.requiredTotal) {
                 maxPartyCount++;
            }
        }
        
        return { perfectTraitCount, maxPartyCount };
    }

    // ===================================================================
    //  ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ 사전 구성 가능성 확인 함수 ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    // ===================================================================


    // ===================================================================
    //  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ 메인 시뮬레이션 함수 (로직 개선) ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
    // ===================================================================

    /** 메인: 시뮬레이션 실행 (직업 필수, '착실함' 스테이지 최우선 배치) */
    function runSimulation() {
        // 1. 캐릭터 목록 구분
        const ownedCharNames = Array.from(charContainer.querySelectorAll('input:checked')).map(cb => cb.value);
        const ownedChars = characters.filter(c => ownedCharNames.includes(c.name));
        let availableOwnedChars = new Set(ownedChars);
        let availableMissingChars = new Set(characters.filter(c => !ownedCharNames.includes(c.name)));

        // 2. 스테이지 목록 정리 및 정렬 (착실함 요구 최우선 반영)
        const selectedStageNames = Array.from(stageContainer.querySelectorAll('input:checked')).map(cb => cb.value);
        let selectedStages = stagesData.filter(s => selectedStageNames.includes(s.name));
        
        // 🚨 [핵심 변경] '착실함' 성격을 요구하는 스테이지를 최우선으로 정렬
        selectedStages.sort((a, b) => {
            const aIsSteady = a.trait.includes('착실함');
            const bIsSteady = b.trait.includes('착실함');
            
            // 1. '착실함' 요구 스테이지 최우선 배치
            if (aIsSteady && !bIsSteady) return -1;
            if (!aIsSteady && bIsSteady) return 1;

            // 2. '착실함' 요구가 없거나 같으면, 총 인원수가 많은 순서 (고급 임무 우선)
            return b.requiredTotal - a.requiredTotal;
        }); 

        if (selectedStages.length === 0) {
            renderPlacements([], null); 
            return;
        }

        // 3. 사전 구성 가능성 확인
        const preCheckResults = checkPreConditions(selectedStages, ownedChars);

        const placements = [];
        const usedMissingChars = new Set(); 

        // 4. 각 스테이지를 순회하며 최종 배치 실행 (성격 슬롯 우선으로 채우기)
        for (const stage of selectedStages) {
            const party = [];
            const neededTraits = new Set(stage.trait);
            const rolesToFill = getNeededRoleSlots(stage); 

            const ownedPlacement = [];
            const remainingRolesAfterOwned = []; // 보유 캐릭터로도 못 채운 슬롯
            
            // 4-1. 1차 배치: 보유 캐릭터 우선 배치 (2점 > 1점 순서로 채움)
            
            // A. 2점 (직업 + 성격) 캐릭터로 슬롯 채우기
            const twoPointRoles = [...rolesToFill];
            const onePointRoles = []; 

            for (const requiredRole of twoPointRoles) {
                let bestChar = findBestChar(availableOwnedChars, requiredRole, neededTraits, 2); 

                if (bestChar) {
                    ownedPlacement.push(bestChar);
                    availableOwnedChars.delete(bestChar);
                } else {
                    onePointRoles.push(requiredRole); // 2점 캐릭터를 못 찾았으므로 1점 캐릭터로 기회 부여
                }
            }

            // B. 1점 (직업만) 캐릭터로 남은 슬롯 채우기
            for (const requiredRole of onePointRoles) {
                let bestChar = findBestChar(availableOwnedChars, requiredRole, neededTraits, 1); 

                if (bestChar) {
                    ownedPlacement.push(bestChar);
                    availableOwnedChars.delete(bestChar);
                } else {
                    remainingRolesAfterOwned.push(requiredRole); // 보유 캐릭터로도 못 채운 슬롯
                }
            }
            
            // 4-2. 2차 배치: 부족한 슬롯을 미보유 캐릭터로 채우기 (직업 필수!)
            const missingPlacement = [];
            
            for (const requiredRole of remainingRolesAfterOwned) {
                // 미보유 캐릭터 중 직업이 맞는 캐릭터를 찾음 (성격은 보너스)
                let bestChar = findBestChar(availableMissingChars, requiredRole, neededTraits, 1); 
                
                if (bestChar) {
                    missingPlacement.push(bestChar);
                    availableMissingChars.delete(bestChar);
                    usedMissingChars.add(bestChar.name);
                } else {
                    // 미보유 캐릭터 중에서도 직업이 맞는 캐릭터를 찾지 못했으므로 최종 미달
                    // (이 미달된 직업은 analyzePlacement에서 missingRoles로 기록됨)
                }
            }

            // 4-3. 최종 파티 구성 및 결과 분석
            party.push(...ownedPlacement, ...missingPlacement);

            const analysis = analyzePlacement(stage, party);
            placements.push({ 
                stage, 
                party, 
                ...analysis,
                missingPlacement
            });
        }

        // 5. 최종 결과 렌더링
        renderPlacements(placements, usedMissingChars, preCheckResults);
    }

    // ===================================================================
    //  ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ 메인 시뮬레이션 함수 (로직 개선) ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    // ===================================================================


    /** 배치 결과 분석 함수 (이전과 동일) */
    function analyzePlacement(stage, party) {
        const missingRoles = {};
        const partyRolesCount = {};
        party.forEach(char => {
            partyRolesCount[char.role] = (partyRolesCount[char.role] || 0) + 1;
        });

        for (const role in stage.role) {
            const required = stage.role[role];
            const filled = partyRolesCount[role] || 0;
            // 실제로 배치된 인원수로 부족분을 정확히 계산
            if (filled < required) {
                missingRoles[role] = required - filled;
            }
        }

        const partyTraits = new Set(party.map(c => c.trait));
        const missingTraits = stage.trait.filter(t => !partyTraits.has(t)); 

        const isSuccess = party.length === stage.requiredTotal && 
                          Object.keys(missingRoles).length === 0;

        return { missingRoles, missingTraits, isSuccess };
    }


    /** 결과 렌더링 함수 (이전과 동일) */
    function renderPlacements(placements, usedMissingChars, preCheckResults) {
        resultsContainer.innerHTML = '';

        if (placements.length === 0) {
            resultsContainer.innerHTML = '<p>보유 캐릭터와 스테이지를 선택하고 \'자동 배치 실행\' 버튼을 눌러주세요.</p>';
            return;
        }

        // 1. 사전 구성 가능성 확인 결과 카드 생성
        if (preCheckResults) {
            const preCheckCard = document.createElement('div');
            preCheckCard.id = 'pre-check-results';
            preCheckCard.className = 'placement-card';
            preCheckCard.innerHTML = `
                <h3>💡 사전 구성 가능성 확인 결과 (총 ${placements.length}개 의뢰 중)</h3>
                <ul class="pre-check-list">
                    <li>
                        <strong>[완벽 충족 파티]</strong> 
                        보유 캐릭터만으로 **성격 조건까지 모두** 맞출 수 있는 최대 의뢰 수: 
                        <span class="count-perfect">${preCheckResults.perfectTraitCount}개</span>
                    </li>
                    <li>
                        <strong>[직업 충족 파티]</strong> 
                        보유 캐릭터만으로 **필수 직업 및 인원**을 맞출 수 있는 최대 의뢰 수: 
                        <span class="count-job">${preCheckResults.maxPartyCount}개</span>
                    </li>
                </ul>
                <p style="font-size: 0.9em; margin-top: 10px;">(이는 가장 까다로운 의뢰를 우선하여 배치했을 때의 최대치이며, 직업이 맞지 않는 캐릭터는 아예 사용하지 않습니다.)</p>
            `;
            resultsContainer.appendChild(preCheckCard);
        }

        // 2. 전체 미보유 캐릭터 사용 목록 카드 생성
        const missingCard = document.createElement('div');
        missingCard.id = 'recommendation-results';
        
        if (usedMissingChars.size > 0) {
            const listItems = Array.from(usedMissingChars).map(name => {
                const char = characters.find(c => c.name === name);
                return `<li><strong>${name}</strong> (<span class="role">${char.role}</span>, <span class="trait">${char.trait}</span>)</li>`;
            }).join('');
            
            missingCard.innerHTML = `
                <h3>⭐️ 필수 충족을 위해 사용된 미보유 캐릭터 (배치 후 결과) ⭐️</h3>
                <p>배치 성공률을 높이기 위해 아래 캐릭터들이 배치되었습니다.</p>
                <ul class="placement-list">
                    ${listItems}
                </ul>
            `;
        } else {
            missingCard.innerHTML = `
                <h3>⭐️ 필수 충족을 위해 사용된 미보유 캐릭터 (배치 후 결과) ⭐️</h3>
                <p>✅ **선택하신 모든 의뢰에 대해 미보유 캐릭터를 사용하지 않고 필수 직업을 모두 채웠습니다!**</p>
            `;
        }
        resultsContainer.appendChild(missingCard);


        // 3. 스테이지별 배치 결과 카드 생성
        placements.forEach(({ stage, party, missingRoles, missingTraits, isSuccess, missingPlacement }) => {
            const card = document.createElement('div');
            card.className = `placement-card ${isSuccess ? 'placement-success' : 'placement-fail'}`;

            // 파티원 목록 생성
            const partyListHTML = party.length > 0
                ? party.map(char => {
                    const isMissing = missingPlacement.includes(char);
                    const nameHtml = isMissing ? `<strong>${char.name} (미보유)</strong>` : `<strong>${char.name}</strong>`;
                    return `<li style="color:${isMissing ? '#007bff' : 'inherit'}">
                        <img src="${char.image}" class="char-image" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 8px;">
                        ${nameHtml}
                        (<span class="role">${char.role}</span>, <span class="trait">${char.trait}</span>)
                    </li>`;
                }).join('')
                : '<li>배치된 캐릭터 없음</li>';
            
            // 부족한 요소 목록 생성
            let statusHTML = '';
            
            const missingRolesText = Object.entries(missingRoles)
                                         .map(([role, count]) => `${role} ${count}명`)
                                         .join(', ');
            
            if (missingRolesText) {
                statusHTML += `<p class="info-fail">🚨 배치 실패: 필수 직업 부족 (${missingRolesText})</p>`;
            } else if (party.length < stage.requiredTotal) {
                 statusHTML += `<p class="info-fail">🚨 인원 부족: ${stage.requiredTotal}명 필요 / ${party.length}명 배치됨 (직업은 다 채웠으나 인원이 모자람)</p>`;
            }

            if (missingTraits.length > 0) {
                statusHTML += `<p>ℹ️ 추천 성격 미충족: ${missingTraits.join(', ')}</p>`;
            }

            if (isSuccess && statusHTML.indexOf('🚨') === -1) {
                statusHTML = '<p>✅ **필수 직업 및 인원수 조건을 모두 만족했습니다!**</p>';
                if (missingTraits.length === 0) {
                    statusHTML += '<p>✨ 추천 성격까지 완벽하게 충족했습니다!</p>';
                }
            } else if (!isSuccess && statusHTML === '') {
                 statusHTML = `<p class="info-fail">🚨 배치 실패: ${stage.requiredTotal}명 필요 / ${party.length}명 배치됨</p>`
            }

            // 카드 HTML 조합
            card.innerHTML = `
                <h3>${stage.name}</h3>
                <div class="placement-status">
                    ${statusHTML}
                </div>
                <ul class="placement-list">
                    ${partyListHTML}
                </ul>
            `;
            resultsContainer.appendChild(card);
        });
    }


    // --- 초기화 실행 ---
    initCharacters();
    initStages();
    updateOwnedCount();

    // --- 이벤트 리스너 연결 ---
    runButton.addEventListener('click', runSimulation);
    selectAllBtn.addEventListener('click', () => toggleAllChars(true));
    deselectAllBtn.addEventListener('click', () => toggleAllChars(false));
    
    charContainer.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            updateOwnedCount();
        }
    });

    stageContainer.addEventListener('change', enforceStageLimit);
});