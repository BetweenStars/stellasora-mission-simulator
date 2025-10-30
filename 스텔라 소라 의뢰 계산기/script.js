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
    { name: "시아", role: "딜러", trait: "모험가", image: "images/char_shia.png" },
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

// 즉시 실행 테스트
console.log('스크립트 로드됨');
console.log('document:', document);
console.log('document.getElementById:', document.getElementById);

// --- DOM 로드 시 실행 ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 로드 완료');

    // --- DOM 요소 가져오기 ---
    const charContainer = document.getElementById('character-checkboxes');
    const stageContainer = document.getElementById('stage-groups');
    const runButton = document.getElementById('run-simulation');
    const resultsContainer = document.getElementById('placement-results');
    const ownedCountSpan = document.getElementById('owned-count');
    const selectAllBtn = document.getElementById('select-all-chars');
    const deselectAllBtn = document.getElementById('deselect-all-chars');

    console.log('DOM 요소들:');
    console.log('charContainer:', charContainer);
    console.log('stageContainer:', stageContainer);
    console.log('runButton:', runButton);
    console.log('resultsContainer:', resultsContainer);
    console.log('ownedCountSpan:', ownedCountSpan);
    console.log('selectAllBtn:', selectAllBtn);
    console.log('deselectAllBtn:', deselectAllBtn);

    // --- 초기화 함수 ---
    function initCharacters() {
        charContainer.innerHTML = '';
        characters.forEach((char) => {
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

        stagesData.forEach((stage) => {
            if (!groups[stage.group]) {
                groups[stage.group] = [];
            }
            groups[stage.group].push(stage);
        });

        for (const groupName in groups) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'stage-group';

            let stageHTML = groups[groupName]
                .map((stage) => {
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
                            <br>
                            <small>직업: ${roleReqs || '없음'}</small>
                            <br>
                            <small>성격: ${traitReqs || '없음'}</small>
                        </label>
                    </div>
                `;
                })
                .join('');

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
        charContainer.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
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

    /** 캐릭터 점수를 계산하는 함수 (개선된 버전) */
    function getCharScore(char, requiredRole, neededTraits, traitRarity = {}) {
        let score = 0;

        // 직업이 맞지 않으면 0점 처리하고 바로 반환 (직업 필수!)
        if (char.role !== requiredRole) return 0;

        // 직업이 맞을 경우
        score += 1; // 직업 일치 기본 점수 (1점)

        if (neededTraits.has(char.trait)) {
            // 성격 일치 시 희소성에 따른 가중치 적용
            const rarityBonus = traitRarity[char.trait] || 1;
            score += 1 + rarityBonus * 0.5; // 기본 1점 + 희소성 보너스
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
                const hasMatchingTraitChar = characters.some(
                    (char) => char.role === role && neededTraits.has(char.trait)
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

    /** 사용 가능한 캐릭터 중 가장 적합한 캐릭터를 찾는 헬퍼 함수 (개선된 버전) */
    function findBestChar(availableChars, requiredRole, neededTraits, minScore = 1, traitRarity = {}) {
        let bestChar = null;
        let bestScore = -1;

        for (const char of availableChars) {
            const score = getCharScore(char, requiredRole, neededTraits, traitRarity);

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

    /** 선택된 스테이지들에서 성격의 희소성을 계산하는 함수 */
    function calculateTraitRarity(selectedStages, ownedChars) {
        const traitDemand = {}; // 각 성격의 총 수요
        const traitSupply = {}; // 각 성격의 보유 캐릭터 공급

        // 1. 수요 계산 (선택된 스테이지들에서 요구하는 성격)
        selectedStages.forEach((stage) => {
            stage.trait.forEach((trait) => {
                traitDemand[trait] = (traitDemand[trait] || 0) + 1;
            });
        });

        // 2. 공급 계산 (보유 캐릭터들의 성격)
        ownedChars.forEach((char) => {
            traitSupply[char.trait] = (traitSupply[char.trait] || 0) + 1;
        });

        // 3. 희소성 계산 (수요/공급 비율)
        const traitRarity = {};
        for (const trait in traitDemand) {
            const demand = traitDemand[trait];
            const supply = traitSupply[trait] || 0;
            // 공급이 0이면 최대 희소성, 아니면 수요/공급 비율
            traitRarity[trait] = supply === 0 ? 10 : Math.max(1, demand / supply);
        }

        return traitRarity;
    }

    // ===================================================================
    //  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ 사전 구성 가능성 확인 함수 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
    // ===================================================================

    /** 사전: 구성 가능한 파티 수를 계산 */
    function checkPreConditions(selectedStages, ownedChars) {
        console.log('checkPreConditions 시작');
        console.log('selectedStages:', selectedStages);
        console.log('ownedChars:', ownedChars);

        // 성격 희소성 계산
        const traitRarity = calculateTraitRarity(selectedStages, ownedChars);
        console.log('traitRarity:', traitRarity);

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
                // 2점 요구: 직업(1점) + 성격(1점) = 2점, 희소성 가중치 적용
                let bestChar = findBestChar(ownedCharsForCheck1, requiredRole, neededTraits, 2, traitRarity);

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
                const partyTraits = new Set(party.map((c) => c.trait));
                const missingTraits = stage.trait.filter((t) => !partyTraits.has(t));
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
                // 1점 요구: 직업만 일치해도 OK, 희소성 가중치 적용
                let bestChar = findBestChar(ownedCharsForCheck2, requiredRole, neededTraits, 1, traitRarity);

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

    /** 전역 최적화를 위한 백트래킹 알고리즘 */
    function optimizeGlobalPlacement(selectedStages, ownedChars, traitRarity) {
        const bestResult = { totalScore: -1, placements: [] };
        const availableChars = new Set(ownedChars);

        function backtrack(stageIndex, currentPlacements, currentScore, availableChars) {
            // 모든 스테이지를 처리했다면 결과 갱신
            if (stageIndex >= selectedStages.length) {
                if (currentScore > bestResult.totalScore) {
                    bestResult.totalScore = currentScore;
                    bestResult.placements = [...currentPlacements];
                }
                return;
            }

            const stage = selectedStages[stageIndex];
            const neededTraits = new Set(stage.trait);
            const rolesToFill = getNeededRoleSlots(stage);

            // 현재 스테이지에 대한 가능한 모든 조합을 시도
            const possibleCombinations = generateCombinations(
                Array.from(availableChars),
                rolesToFill,
                neededTraits,
                traitRarity
            );

            // 상위 N개의 조합만 시도 (성능 최적화)
            const topCombinations = possibleCombinations.slice(0, Math.min(10, possibleCombinations.length));

            for (const combination of topCombinations) {
                const { party, score } = combination;

                if (party.length === stage.requiredTotal) {
                    // 이 조합을 선택하고 다음 스테이지로 진행
                    const newAvailableChars = new Set(availableChars);
                    party.forEach((char) => newAvailableChars.delete(char));

                    const placement = {
                        stage,
                        party: [...party],
                        score,
                        ...analyzePlacement(stage, party),
                    };

                    currentPlacements.push(placement);
                    backtrack(stageIndex + 1, currentPlacements, currentScore + score, newAvailableChars);
                    currentPlacements.pop();
                }
            }

            // 현재 스테이지를 건너뛰는 경우도 고려
            const emptyPlacement = {
                stage,
                party: [],
                score: 0,
                ...analyzePlacement(stage, []),
            };
            currentPlacements.push(emptyPlacement);
            backtrack(stageIndex + 1, currentPlacements, currentScore, availableChars);
            currentPlacements.pop();
        }

        backtrack(0, [], 0, availableChars);
        return bestResult.placements;
    }

    /** 특정 스테이지에 대한 가능한 캐릭터 조합을 생성 */
    function generateCombinations(availableChars, rolesToFill, neededTraits, traitRarity) {
        const combinations = [];

        function generatePartyRecursive(roleIndex, currentParty, currentScore) {
            if (roleIndex >= rolesToFill.length) {
                combinations.push({
                    party: [...currentParty],
                    score: currentScore,
                });
                return;
            }

            const requiredRole = rolesToFill[roleIndex];
            const eligibleChars = availableChars.filter(
                (char) => char.role === requiredRole && !currentParty.includes(char)
            );

            // 성격 매칭 우선순위에 따라 정렬
            eligibleChars.sort((a, b) => {
                const aScore = getCharScore(a, requiredRole, neededTraits, traitRarity);
                const bScore = getCharScore(b, requiredRole, neededTraits, traitRarity);
                return bScore - aScore;
            });

            // 상위 3명까지만 고려 (성능 최적화)
            const topChars = eligibleChars.slice(0, 3);

            for (const char of topChars) {
                const charScore = getCharScore(char, requiredRole, neededTraits, traitRarity);
                currentParty.push(char);
                generatePartyRecursive(roleIndex + 1, currentParty, currentScore + charScore);
                currentParty.pop();
            }
        }

        generatePartyRecursive(0, [], 0);

        // 점수 순으로 정렬하여 반환
        return combinations.sort((a, b) => b.score - a.score);
    }

    /** 강화된 전역 최적화 알고리즘 (보유 + 미보유 캐릭터 모두 고려) */
    function optimizeAdvancedGlobalPlacement(
        selectedStages,
        ownedChars,
        availableMissingChars,
        usedMissingChars,
        traitRarity
    ) {
        console.log('강화된 전역 최적화 시작...');

        const allAvailableChars = [...ownedChars, ...Array.from(availableMissingChars)];
        const bestResult = {
            totalScore: -1,
            placements: [],
            successfulStages: 0,
            perfectStages: 0,
        };

        function evaluatePlacement(placements) {
            let totalScore = 0;
            let successfulStages = 0;
            let perfectStages = 0;

            for (const placement of placements) {
                const stage = placement.stage;
                const party = placement.party;

                // 인원수 충족 여부
                const isComplete = party.length === stage.requiredTotal;

                // 직업 요구사항 충족 여부
                const roleCount = {};
                party.forEach((char) => {
                    roleCount[char.role] = (roleCount[char.role] || 0) + 1;
                });

                let rolesSatisfied = true;
                for (const [role, required] of Object.entries(stage.role)) {
                    if ((roleCount[role] || 0) < required) {
                        rolesSatisfied = false;
                        break;
                    }
                }

                // 성격 요구사항 충족 여부
                const partyTraits = new Set(party.map((c) => c.trait));
                const traitsSatisfied = stage.trait.every((trait) => partyTraits.has(trait));

                // 점수 계산
                const neededTraits = new Set(stage.trait);
                const stageScore = party.reduce((score, char) => {
                    return score + getCharScore(char, char.role, neededTraits, traitRarity);
                }, 0);

                totalScore += stageScore;

                if (isComplete && rolesSatisfied) {
                    successfulStages++;
                    if (traitsSatisfied) {
                        perfectStages++;
                    }
                }
            }

            return { totalScore, successfulStages, perfectStages };
        }

        function backtrackAdvanced(stageIndex, currentPlacements, usedChars) {
            if (stageIndex >= selectedStages.length) {
                const evaluation = evaluatePlacement(currentPlacements);

                // 성공한 스테이지 수를 우선적으로 고려, 그 다음 완벽한 스테이지 수, 마지막으로 총점
                const currentValue =
                    evaluation.successfulStages * 10000 + evaluation.perfectStages * 1000 + evaluation.totalScore;
                const bestValue =
                    bestResult.successfulStages * 10000 + bestResult.perfectStages * 1000 + bestResult.totalScore;

                if (currentValue > bestValue) {
                    bestResult.totalScore = evaluation.totalScore;
                    bestResult.successfulStages = evaluation.successfulStages;
                    bestResult.perfectStages = evaluation.perfectStages;
                    bestResult.placements = JSON.parse(JSON.stringify(currentPlacements));
                }
                return;
            }

            const stage = selectedStages[stageIndex];
            const neededTraits = new Set(stage.trait);
            const availableForThisStage = allAvailableChars.filter((char) => !usedChars.has(char));

            // 이 스테이지에 대한 가능한 모든 유효한 조합 생성
            const validCombinations = generateValidCombinations(
                stage,
                availableForThisStage,
                neededTraits,
                traitRarity
            );

            // 상위 조합들만 시도 (성능 최적화)
            const topCombinations = validCombinations.slice(0, Math.min(15, validCombinations.length));

            for (const combination of topCombinations) {
                const newUsedChars = new Set(usedChars);
                combination.party.forEach((char) => newUsedChars.add(char));

                const placement = {
                    stage: stage,
                    party: [...combination.party],
                    ...analyzePlacement(stage, combination.party),
                    missingPlacement: combination.party.filter((char) => !ownedChars.includes(char)),
                };

                currentPlacements.push(placement);
                backtrackAdvanced(stageIndex + 1, currentPlacements, newUsedChars);
                currentPlacements.pop();
            }

            // 이 스테이지를 건너뛰는 경우도 고려 (빈 파티)
            const emptyPlacement = {
                stage: stage,
                party: [],
                ...analyzePlacement(stage, []),
                missingPlacement: [],
            };
            currentPlacements.push(emptyPlacement);
            backtrackAdvanced(stageIndex + 1, currentPlacements, usedChars);
            currentPlacements.pop();
        }

        backtrackAdvanced(0, [], new Set());

        // 미보유 캐릭터 사용 정보 업데이트
        for (const placement of bestResult.placements) {
            for (const char of placement.missingPlacement) {
                usedMissingChars.add(char.name);
            }
        }

        console.log(
            `최적화 완료: ${bestResult.successfulStages}/${selectedStages.length} 스테이지 성공, ${bestResult.perfectStages} 완벽`
        );
        return bestResult.placements;
    }

    /** 스테이지에 대한 유효한 캐릭터 조합 생성 */
    function generateValidCombinations(stage, availableChars, neededTraits, traitRarity) {
        const combinations = [];
        const maxCombinations = 50; // 성능 제한

        // 완벽한 조합 우선 시도 (성격 + 직업 모두 만족)
        const perfectCombinations = generatePerfectCombinations(stage, availableChars, neededTraits, traitRarity);
        combinations.push(...perfectCombinations);

        if (combinations.length < maxCombinations) {
            // 직업만 만족하는 조합
            const jobOnlyCombinations = generateJobOnlyCombinations(stage, availableChars, traitRarity);
            combinations.push(...jobOnlyCombinations);
        }

        if (combinations.length < maxCombinations) {
            // 성격만 만족하는 조합
            const traitOnlyCombinations = generateTraitOnlyCombinations(stage, availableChars, neededTraits);
            combinations.push(...traitOnlyCombinations);
        }

        // 점수 순으로 정렬
        return combinations.sort((a, b) => b.score - a.score).slice(0, maxCombinations);
    }

    /** 완벽한 조합 생성 (성격 + 직업 모두 만족) */
    function generatePerfectCombinations(stage, availableChars, neededTraits, traitRarity) {
        const combinations = [];
        const usedTraits = new Set();
        const party = [];

        function tryPerfectCombination(remainingRoles, availableForSelection) {
            if (party.length >= stage.requiredTotal) {
                if (party.length === stage.requiredTotal) {
                    const score = party.reduce(
                        (s, char) => s + getCharScore(char, char.role, neededTraits, traitRarity),
                        0
                    );
                    combinations.push({ party: [...party], score });
                }
                return;
            }

            if (remainingRoles.length === 0) return;

            const role = remainingRoles[0];
            const newRemainingRoles = remainingRoles.slice(1);

            for (const char of availableForSelection) {
                if (char.role === role && !party.includes(char)) {
                    // 성격 중복 체크 (요구 성격이 아니거나 이미 사용된 성격은 제한)
                    if (neededTraits.has(char.trait) && usedTraits.has(char.trait)) continue;

                    party.push(char);
                    if (neededTraits.has(char.trait)) usedTraits.add(char.trait);

                    tryPerfectCombination(newRemainingRoles, availableForSelection);

                    party.pop();
                    if (neededTraits.has(char.trait)) usedTraits.delete(char.trait);
                }
            }
        }

        const rolesToFill = getNeededRoleSlots(stage);
        tryPerfectCombination(rolesToFill, availableChars);

        return combinations;
    }

    /** 직업만 만족하는 조합 생성 */
    function generateJobOnlyCombinations(stage, availableChars, traitRarity) {
        const combinations = [];
        const rolesToFill = getNeededRoleSlots(stage);

        function tryJobCombination(roleIndex, currentParty) {
            if (currentParty.length >= stage.requiredTotal) {
                if (currentParty.length === stage.requiredTotal) {
                    const score = currentParty.reduce(
                        (s, char) => s + getCharScore(char, char.role, new Set(), traitRarity),
                        0
                    );
                    combinations.push({ party: [...currentParty], score });
                }
                return;
            }

            if (roleIndex >= rolesToFill.length) return;

            const role = rolesToFill[roleIndex];
            const eligibleChars = availableChars.filter((char) => char.role === role && !currentParty.includes(char));

            for (const char of eligibleChars.slice(0, 3)) {
                // 상위 3명만
                currentParty.push(char);
                tryJobCombination(roleIndex + 1, currentParty);
                currentParty.pop();
            }
        }

        tryJobCombination(0, []);
        return combinations;
    }

    /** 성격만 만족하는 조합 생성 */
    function generateTraitOnlyCombinations(stage, availableChars, neededTraits) {
        const combinations = [];
        const usedTraits = new Set();
        const party = [];

        function tryTraitCombination() {
            if (party.length >= stage.requiredTotal) {
                if (party.length === stage.requiredTotal) {
                    const score = party.reduce((s, char) => s + (neededTraits.has(char.trait) ? 2 : 1), 0);
                    combinations.push({ party: [...party], score });
                }
                return;
            }

            for (const char of availableChars) {
                if (party.includes(char)) continue;

                // 요구 성격이면서 이미 사용된 성격은 건너뛰기
                if (neededTraits.has(char.trait) && usedTraits.has(char.trait)) continue;

                party.push(char);
                if (neededTraits.has(char.trait)) usedTraits.add(char.trait);

                tryTraitCombination();

                party.pop();
                if (neededTraits.has(char.trait)) usedTraits.delete(char.trait);

                if (combinations.length >= 20) break; // 성능 제한
            }
        }

        tryTraitCombination();
        return combinations;
    }

    /** 메인: 시뮬레이션 실행 (직업 필수, 성격 희소성 기반 최적화) */
    function runSimulation() {
        console.log('runSimulation 함수 시작');

        // 1. 캐릭터 목록 구분
        const ownedCharNames = Array.from(charContainer.querySelectorAll('input:checked')).map((cb) => cb.value);
        console.log('선택된 캐릭터:', ownedCharNames);

        const ownedChars = characters.filter((c) => ownedCharNames.includes(c.name));
        let availableOwnedChars = new Set(ownedChars);
        let availableMissingChars = new Set(characters.filter((c) => !ownedCharNames.includes(c.name)));

        // 2. 스테이지 목록 정리 및 정렬 (착실함 요구 최우선 반영)
        const selectedStageNames = Array.from(stageContainer.querySelectorAll('input:checked')).map((cb) => cb.value);
        console.log('선택된 스테이지:', selectedStageNames);

        let selectedStages = stagesData.filter((s) => selectedStageNames.includes(s.name));

        // 성격 희소성 계산
        const traitRarity = calculateTraitRarity(selectedStages, ownedChars);
        console.log('성격 희소성:', traitRarity);

        // 🚨 [핵심 변경] 성격 희소성과 '착실함' 요구를 모두 고려한 스테이지 정렬
        selectedStages.sort((a, b) => {
            const aIsSteady = a.trait.includes('착실함');
            const bIsSteady = b.trait.includes('착실함');

            // 1. '착실함' 요구 스테이지 최우선 배치
            if (aIsSteady && !bIsSteady) return -1;
            if (!aIsSteady && bIsSteady) return 1;

            // 2. 성격 희소성이 높은 스테이지 우선 배치
            const aMaxRarity = Math.max(...a.trait.map((t) => traitRarity[t] || 1));
            const bMaxRarity = Math.max(...b.trait.map((t) => traitRarity[t] || 1));
            if (aMaxRarity !== bMaxRarity) return bMaxRarity - aMaxRarity;

            // 3. 총 인원수가 많은 순서 (고급 임무 우선)
            return b.requiredTotal - a.requiredTotal;
        });

        if (selectedStages.length === 0) {
            console.log('선택된 스테이지가 없습니다.');
            renderPlacements([], null);
            return;
        }

        console.log('사전 구성 가능성 확인 시작...');
        // 3. 사전 구성 가능성 확인
        const preCheckResults = checkPreConditions(selectedStages, ownedChars);
        console.log('사전 구성 가능성 확인 결과:', preCheckResults);

        const placements = [];
        const usedMissingChars = new Set();

        console.log('배치 알고리즘 선택 중...');
        // 4. 강화된 전역 최적화 또는 그리디 알고리즘 사용
        if (selectedStages.length <= 4) {
            // 조건 완화: 4개 이하면 전역 최적화
            console.log('강화된 전역 최적화 알고리즘 사용');
            // 강화된 전역 최적화 사용
            const optimizedPlacements = optimizeAdvancedGlobalPlacement(
                selectedStages,
                ownedChars,
                availableMissingChars,
                usedMissingChars,
                traitRarity
            );
            console.log('강화된 전역 최적화 결과:', optimizedPlacements);
            placements.push(...optimizedPlacements);

            // 미보유 캐릭터로 부족한 부분 보완
            for (const placement of placements) {
                if (placement.party.length < placement.stage.requiredTotal) {
                    const remainingRoles = [];
                    const roleCount = {};
                    placement.party.forEach((char) => {
                        roleCount[char.role] = (roleCount[char.role] || 0) + 1;
                    });

                    for (const [role, required] of Object.entries(placement.stage.role)) {
                        const current = roleCount[role] || 0;
                        for (let i = current; i < required; i++) {
                            remainingRoles.push(role);
                        }
                    }

                    const missingPlacement = [];
                    const neededTraits = new Set(placement.stage.trait);

                    for (const role of remainingRoles) {
                        const bestChar = findBestChar(availableMissingChars, role, neededTraits, 1, traitRarity);
                        if (bestChar) {
                            missingPlacement.push(bestChar);
                            placement.party.push(bestChar);
                            availableMissingChars.delete(bestChar);
                            usedMissingChars.add(bestChar.name);
                        }
                    }

                    placement.missingPlacement = missingPlacement;
                    // 배치 결과 재분석
                    const analysis = analyzePlacement(placement.stage, placement.party);
                    Object.assign(placement, analysis);
                }
            }
        } else {
            console.log('그리디 알고리즘 사용');
            // 기존 그리디 알고리즘 사용
            runGreedyAlgorithm(
                selectedStages,
                availableOwnedChars,
                availableMissingChars,
                placements,
                usedMissingChars,
                traitRarity
            );
        }

        console.log('최종 배치 결과:', placements);
        console.log('사용된 미보유 캐릭터:', usedMissingChars);
        console.log('렌더링 시작...');

        // 5. 최종 결과 렌더링
        renderPlacements(placements, usedMissingChars, preCheckResults);
        console.log('runSimulation 완료');
    }

    /** 그리디 알고리즘으로 배치 실행 */
    function runGreedyAlgorithm(
        selectedStages,
        availableOwnedChars,
        availableMissingChars,
        placements,
        usedMissingChars,
        traitRarity
    ) {
        console.log('runGreedyAlgorithm 시작');
        console.log('selectedStages:', selectedStages);

        for (const stage of selectedStages) {
            console.log('스테이지 처리 중:', stage.name);
            console.log('필요 인원수:', stage.requiredTotal);
            console.log('직업 요구사항:', stage.role);

            const party = [];
            const neededTraits = new Set(stage.trait);
            const rolesToFill = getNeededRoleSlots(stage);

            console.log('필요한 직업 슬롯:', rolesToFill);

            const ownedPlacement = [];
            const remainingRolesAfterOwned = []; // 보유 캐릭터로도 못 채운 슬롯
            const usedTraits = new Set(); // 이미 사용된 성격 추적

            console.log('요구 성격:', stage.trait);

            // 1차 배치: 성격 우선 배치 (각 성격별로 최대 1명씩)
            for (const requiredTrait of stage.trait) {
                if (ownedPlacement.length >= stage.requiredTotal) break;
                if (usedTraits.has(requiredTrait)) continue; // 이미 사용된 성격은 건너뛰기

                // 해당 성격을 가진 캐릭터 중 가장 적합한 캐릭터 찾기
                let bestChar = null;
                let bestScore = -1;

                for (const char of availableOwnedChars) {
                    if (char.trait === requiredTrait) {
                        // 이 캐릭터가 필요한 직업 중 하나와 맞는지 확인
                        for (const [role, count] of Object.entries(stage.role)) {
                            if (char.role === role) {
                                const score = getCharScore(char, char.role, neededTraits, traitRarity);
                                if (score > bestScore) {
                                    bestScore = score;
                                    bestChar = char;
                                }
                                break;
                            }
                        }
                    }
                }

                if (bestChar) {
                    ownedPlacement.push(bestChar);
                    availableOwnedChars.delete(bestChar);
                    usedTraits.add(requiredTrait);
                    console.log(`[전략1] 성격 ${requiredTrait} + 직업 매칭:`, bestChar.name);
                }
            }

            // 전략 1.5: 성격만 맞추기 (직업 무시, 아직 안 쓴 성격만)
            for (const requiredTrait of stage.trait) {
                if (ownedPlacement.length >= stage.requiredTotal) break;
                if (usedTraits.has(requiredTrait)) continue;

                let bestChar = null;
                for (const char of availableOwnedChars) {
                    if (char.trait === requiredTrait) {
                        bestChar = char;
                        break; // 첫 번째로 찾은 캐릭터 사용
                    }
                }

                if (bestChar) {
                    ownedPlacement.push(bestChar);
                    availableOwnedChars.delete(bestChar);
                    usedTraits.add(requiredTrait);
                    console.log(`[전략1.5] 성격만 ${requiredTrait} 매칭:`, bestChar.name);
                }
            }

            // 2차 배치: 남은 직업 슬롯을 성격 상관없이 채우기
            for (const requiredRole of rolesToFill) {
                if (ownedPlacement.length >= stage.requiredTotal) break;

                // 이미 배치된 캐릭터들의 직업 카운트
                const placedRoles = {};
                ownedPlacement.forEach((char) => {
                    placedRoles[char.role] = (placedRoles[char.role] || 0) + 1;
                });

                // 해당 직업이 아직 필요한지 확인
                const requiredCount = stage.role[requiredRole] || 0;
                const placedCount = placedRoles[requiredRole] || 0;

                if (placedCount < requiredCount) {
                    let bestChar = findBestChar(availableOwnedChars, requiredRole, neededTraits, 1, traitRarity);

                    if (bestChar) {
                        ownedPlacement.push(bestChar);
                        availableOwnedChars.delete(bestChar);
                        console.log(`[전략2] 직업 ${requiredRole} 추가 배치:`, bestChar.name);
                    } else {
                        remainingRolesAfterOwned.push(requiredRole);
                    }
                }
            }

            // 전략 3: 직업도 성격도 상관없이 남은 슬롯 채우기 (보유 캐릭터로)
            while (ownedPlacement.length < stage.requiredTotal && availableOwnedChars.size > 0) {
                const anyChar = Array.from(availableOwnedChars)[0];
                ownedPlacement.push(anyChar);
                availableOwnedChars.delete(anyChar);
                console.log(`[전략3] 임의 배치 (보유 캐릭터):`, anyChar.name);
            }

            // 전략 4: 부족한 슬롯을 미보유 캐릭터로 채우기 (직업 우선)
            const missingPlacement = [];

            for (const requiredRole of remainingRolesAfterOwned) {
                // 이미 필요 인원수를 채웠으면 중단
                if (ownedPlacement.length + missingPlacement.length >= stage.requiredTotal) break;

                // 미보유 캐릭터 중 직업이 맞는 캐릭터를 찾음 (성격은 보너스)
                let bestChar = findBestChar(availableMissingChars, requiredRole, neededTraits, 1, traitRarity);

                if (bestChar) {
                    missingPlacement.push(bestChar);
                    availableMissingChars.delete(bestChar);
                    usedMissingChars.add(bestChar.name);
                    console.log(`[전략4] 미보유 직업 ${requiredRole} 배치:`, bestChar.name);
                }
            }

            // 전략 5: 아직도 부족하면 미보유 캐릭터로 임의 채우기 (최후의 수단)
            while (
                ownedPlacement.length + missingPlacement.length < stage.requiredTotal &&
                availableMissingChars.size > 0
            ) {
                const anyChar = Array.from(availableMissingChars)[0];
                missingPlacement.push(anyChar);
                availableMissingChars.delete(anyChar);
                usedMissingChars.add(anyChar.name);
                console.log(`[전략5] 미보유 임의 배치 (최후수단):`, anyChar.name);
            }

            // 최종 파티 구성 및 결과 분석
            party.push(...ownedPlacement, ...missingPlacement);

            // 혹시 초과했다면 잘라내기 (안전장치)
            if (party.length > stage.requiredTotal) {
                console.warn(
                    `스테이지 ${stage.name}: 파티 인원수 초과 (${party.length}명 → ${stage.requiredTotal}명으로 조정)`
                );
                party.splice(stage.requiredTotal);
            }

            console.log('스테이지', stage.name, '최종 파티:', party, `(${party.length}/${stage.requiredTotal}명)`);

            const analysis = analyzePlacement(stage, party);
            placements.push({
                stage,
                party,
                ...analysis,
                missingPlacement,
            });
        }
        console.log('runGreedyAlgorithm 완료, placements:', placements);
    }

    // ===================================================================
    //  ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ 메인 시뮬레이션 함수 (로직 개선) ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    // ===================================================================

    /** 배치 결과 분석 함수 (이전과 동일) */
    function analyzePlacement(stage, party) {
        const missingRoles = {};
        const partyRolesCount = {};
        party.forEach((char) => {
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

        const partyTraits = new Set(party.map((c) => c.trait));
        const missingTraits = stage.trait.filter((t) => !partyTraits.has(t));

        const isSuccess = party.length === stage.requiredTotal && Object.keys(missingRoles).length === 0;

        return { missingRoles, missingTraits, isSuccess };
    }

    // ===================================================================
    //  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ ⭐[수정됨]⭐ 결과 렌더링 함수 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
    // ===================================================================

    /** 결과 렌더링 함수 (점수 표시 제거, 요구 조건 추가) */
    function renderPlacements(placements, usedMissingChars, preCheckResults) {
        console.log('renderPlacements 시작');
        console.log('placements:', placements);
        console.log('usedMissingChars:', usedMissingChars);
        console.log('preCheckResults:', preCheckResults); // (데이터는 받지만 사용하지 않음)

        resultsContainer.innerHTML = '';

        if (placements.length === 0) {
            console.log('배치 결과가 없습니다.');
            resultsContainer.innerHTML = "<p>보유 캐릭터와 스테이지를 선택하고 '자동 배치 실행' 버튼을 눌러주세요.</p>";
            return;
        }

        console.log('배치 결과 렌더링 중...');

        // 1. [삭제됨] 사전 구성 가능성 확인 결과 카드
        /* if (preCheckResults) {
            // ... (관련 코드 모두 제거) ...
        }
        */

        // 2. 전체 미보유 캐릭터 사용 목록 카드 생성 (이 부분은 유지)
        const missingCard = document.createElement('div');
        missingCard.id = 'recommendation-results';

        if (usedMissingChars && usedMissingChars.size > 0) {
            const listItems = Array.from(usedMissingChars)
                .map((name) => {
                    const char = characters.find((c) => c.name === name);
                    return `<li><strong>${name}</strong> (<span class="role">${char.role}</span>, <span class="trait">${char.trait}</span>)</li>`;
                })
                .join('');

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
        placements.forEach(({ stage, party, missingRoles, missingTraits, isSuccess, missingPlacement = [] }) => {
            const card = document.createElement('div');
            card.className = `placement-card ${isSuccess ? 'placement-success' : 'placement-fail'}`;

            // [삭제됨] 스테이지 점수 계산
            // const neededTraits = new Set(stage.trait);
            // const stageScore = ...
            // const maxPossibleScore = ...

            // ⭐ [추가됨] 스테이지 요구 조건 HTML 생성
            const roleReqs = Object.entries(stage.role)
                .map(([role, count]) => `<span class="role">${role} ${count}</span>`)
                .join(', ');
            const traitReqs = stage.trait
                .map(trait => `<span class="trait">${trait}</span>`)
                .join(', ');

            // ⭐ [수정 제안] missingPlacement의 캐릭터 이름 목록을 미리 Set으로 저장
            const missingCharNames = new Set(missingPlacement.map(c => c.name));

            // 파티원 목록 생성 (점수 표시 제거)
            const partyListHTML =
                party.length > 0
                    ? party
                        .map((char) => {
                            // ⭐ [수정 제안] char 객체 대신 char.name을 사용하여 비교
                            const isMissing = missingCharNames.has(char.name);
                            const nameHtml = isMissing
                                ? `<strong>${char.name} (미보유)</strong>`
                                : `<strong>${char.name}</strong>`;

                            // [수정됨] scoreHtml 제거
                            return `<li style="color:${isMissing ? '#c70a0a' : 'inherit'}">
                    <img src="${char.image
                                }" class="char-image" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 8px;">
                    ${nameHtml}
                    (<span class="role">${char.role}</span>, <span class="trait">${char.trait}</span>)
                </li>`;
                        })
                        .join('')
                    : '<li>배치된 캐릭터 없음</li>';

            // 부족한 요소 목록 생성 (점수 표시 제거)
            // [수정됨] statusHTML 시작을 빈 문자열로
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
                statusHTML += '<p>✅ 필수 역할군을 모두 충족했습니다!</p>';
                if (missingTraits.length === 0) {
                    statusHTML += '<p>✨ 보너스 조건을 충족했습니다!</p>';
                }
            } else if (!isSuccess && statusHTML.indexOf('🚨') === -1) {
                statusHTML += `<p class="info-fail">🚨 배치 실패: ${stage.requiredTotal}명 필요 / ${party.length}명 배치됨</p>`;
            }

            // [수정됨] 카드 HTML 조합 (요구 조건 div 추가)
            card.innerHTML = `
                <h3 class="stage-name">${stage.name}</h3>

                <small><strong>요구 직업:</strong> ${roleReqs || '없음'}</small><br>
                <small><strong>요구 성격:</strong> ${traitReqs || '없음'}</small>

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

    // ===================================================================
    //  ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ ⭐[수정됨]⭐ 결과 렌더링 함수 ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    // ===================================================================


    // --- 초기화 실행 ---
    initCharacters();
    initStages();
    updateOwnedCount();

    // --- 이벤트 리스너 연결 ---
    runButton.addEventListener('click', () => {
        console.log('버튼 클릭됨!');
        runSimulation();
    });
    selectAllBtn.addEventListener('click', () => toggleAllChars(true));
    deselectAllBtn.addEventListener('click', () => toggleAllChars(false));

    charContainer.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            updateOwnedCount();
        }
    });

    stageContainer.addEventListener('change', enforceStageLimit);
});

// 추가 테스트: window.onload 이벤트
window.addEventListener('load', () => {
    console.log('window.load 이벤트 발생');
    const testButton = document.getElementById('run-simulation');
    console.log('testButton:', testButton);
});

