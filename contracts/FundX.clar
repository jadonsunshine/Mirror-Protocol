;; ============================================
;; FundX - Crowdfunding Platform on Stacks
;; ============================================
;; This contract allows users to create crowdfunding campaigns,
;; donate in USDCx stablecoin, and withdraw funds when goals are met.
;; Platform charges a 2% fee on successful campaigns.

;; ============================================
;; CONSTANTS - Fixed values that never change
;; ============================================

;; The address that deployed this contract (receives platform fees)
(define-constant contract-owner tx-sender)

;; Error codes - these help identify what went wrong
(define-constant err-owner-only (err u100))          ;; Only contract owner can do this
(define-constant err-not-found (err u101))           ;; Campaign doesn't exist
(define-constant err-already-exists (err u102))      ;; Campaign already exists
(define-constant err-invalid-amount (err u103))      ;; Amount must be greater than 0
(define-constant err-campaign-ended (err u104))      ;; Campaign deadline has passed
(define-constant err-campaign-active (err u105))     ;; Campaign is still running
(define-constant err-goal-not-reached (err u106))    ;; Goal hasn't been met yet
(define-constant err-unauthorized (err u107))        ;; You're not allowed to do this
(define-constant err-invalid-duration (err u108))    ;; Duration must be greater than 0
(define-constant err-goal-reached (err u109))        ;; Goal already reached, can't donate more
(define-constant err-already-withdrawn (err u110))   ;; Funds already withdrawn

;; Platform fee settings
(define-constant platform-fee-percent u2)   ;; 2% fee
(define-constant fee-denominator u100)      ;; Used to calculate percentage (2/100 = 2%)

